<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid mt-5">
      <table class="table table-striped table-hover">
        <thead>
          <tr class="text-left">
            <th scope="col">#</th>
            <th scope="col">圖片縮圖</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,key) in storages" :key="item.id">
            <td>
              {{ key+1 }}
            </td>
            <td>
              <img :src="item.path"
                class="img-fluid"
                width="100px">
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-secondary btn-sm"
                  type="button">
                  <i class="fas fa-pen"></i>
                </button>
                <button class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click.prevent="openModal(item)">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    <!-- pagination 元件 -->
    <pagination :pages="pagination" @emit-pages="getData"/>
    </div>
    <!-- Modal -->
    <div
      id="deleteModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>刪除資料</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除該筆資料 (刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteData"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Storages',
  components: {
    Pagination,
  },
  data() {
    return {
      storages: {},
      pagination: {},
      tempData: {}, // 暫存區
      isLoading: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 取得所有檔案列表
    getData(nowPage = 1) { // 預設參數
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage?page=${nowPage}`;
      this.$http.get(api).then((res) => {
        console.log('取得所有檔案 成功', res);
        this.isLoading = false;
        this.storages = res.data.data;
        this.pagination = res.data.meta.pagination;
      }).catch((error) => {
        this.isLoading = false;
        console.log('取得所有檔案 失敗', error);
      });
    },
    // 打開 Modal
    openModal(item) {
      $('#deleteModal').modal('show');
      this.tempData = { ...item }; // 物件拷貝
    },
    // 刪除指定檔案
    deleteData() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage${this.tempData.id}`;
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        // 關閉 Modal
        $('#deleteModal').modal('hide');
        console.log('刪除指定檔案 成功', res);
        // 刪除完要再重新跑 getData 更新畫面
        this.getData();
      }).catch((error) => {
        this.isLoading = false;
        // 關閉 Modal
        $('#deleteModal').modal('hide');
        console.log('刪除指定檔案 失敗', error);
      });
    },
  },
};
</script>

<style>

</style>
