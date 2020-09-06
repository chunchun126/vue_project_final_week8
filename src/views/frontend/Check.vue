<template>
  <div>
    <div class="container pt-5">
      <ul class="step list-unstyled d-flex text-center
        justify-content-center pb-5 text-primary">
        <li>
          <p>購物車</p>
          <div class="step-line"></div>
          <div class="step-sign solid"></div>
        </li>
        <li>
          <p>填寫訂單</p>
          <div class="step-line"></div>
          <div class="step-sign solid"></div>
        </li>
        <li>
          <p>確認訂單</p>
          <div class="step-line"></div>
          <div class="step-sign solid"></div>
        </li>
        <li>
          <p>交易成功</p>
          <div class="step-sign"></div>
        </li>
      </ul>
      <div class="row mb-5 recip">
        <div class="col-md-8 offset-2">
          <div class="content p-3 text-muted">
            <h6 class="text-center mb-3">訂單明細</h6>
            <div class="row justify-content-center">
              <div class="col-md-10 content border-bottom-0">
                <div class="row p-3">
                  <div class="col-md-6">
                    <img class="img-fluid"
                      src="https://images.unsplash.com/photo-1598560917682-2577f42feff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                  </div>
                  <div class="col-md-6">
                    <h1 class="h6">深海藍寶鑽戒</h1>
                    <hr class="m-0">
                    <div class="d-flex">
                      <span class="w-25">數量</span>
                      <span class="w-75 text-right">1</span>
                    </div>
                    <hr class="m-0">
                    <div class="d-flex">
                      <span>小計</span>
                      <span class="ml-auto">NT $ 11,200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-10 content border-bottom-0">
                <div class="row p-3">
                  <div class="col-md-6">
                    <img class="img-fluid"
                      src="https://images.unsplash.com/photo-1598560917682-2577f42feff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                  </div>
                  <div class="col-md-6">
                    <h1 class="h6">深海藍寶鑽戒</h1>
                    <hr class="m-0">
                    <div class="d-flex">
                      <span class="w-25">數量</span>
                      <span class="w-75 text-right">1</span>
                    </div>
                    <hr class="m-0">
                    <div class="d-flex">
                      <span>小計</span>
                      <span class="ml-auto">NT $ 11,200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-10 content">
                <div class="d-flex px-3 pt-1">
                  <span>總價</span>
                  <span class="ml-auto">NT $ 11,200</span>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-10 offset-1">
                <table class="table table-borderless table-sm text-muted">
                  <tr>
                    <th width="170px">訂購人姓名</th>
                    <td>徐XX</td>
                  </tr>
                  <tr>
                    <th width="170px">訂購人姓名</th>
                    <td>徐XX</td>
                  </tr>
                  <tr>
                    <th width="170px">訂購人姓名</th>
                    <td>徐XX</td>
                  </tr>
                </table>
              </div>
            </div>

          </div>
          <div class="row mt-3">
              <div class="col-md-6">
                <router-link :to="`/orders`"
                  class="btn btn-sm btn-outline-primary rounded-0 d-block">回上一步
                </router-link>
              </div>
              <div class="col-md-6">
                <router-link :to="`/success`"
                  class="btn btn-sm btn-primary rounded-0 d-block">確定付款
                </router-link>
              </div>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.recip {
  color: rgb(167, 167, 167);
}
</style>
