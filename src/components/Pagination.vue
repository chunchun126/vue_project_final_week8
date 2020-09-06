<template>
  <div>
    <nav aria-label="Page navigation">
      <ul class="pagination pagination-sm justify-content-end">
        <li class="page-item" :class="{disabled: pages.current_page === 1}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getPages(pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li
          class="page-item"
          v-for="(page, index) in pages.total_pages"
          :key="index"
          :class="{active: pages.current_page === page}"
        >
          <a class="page-link" href="#" @click.prevent="getPages(page)">{{ page }}</a>
        </li>

        <li class="page-item" :class="{disabled: pages.current_page === pages.total_pages}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getPages(pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    pages: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  methods: {
    getPages(page) {
      this.$emit('emit-pages', page);
    },
  },
};
</script>

<style>
</style>
