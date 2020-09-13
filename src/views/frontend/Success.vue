<template>
  <div>
    <div class="container pt-5">
      <ul class="step list-unstyled d-flex text-center
        justify-content-center pb-5 text-primary">
        <li>
          <p>購物袋</p>
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
          <div class="step-sign solid"></div>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <img class="successImg"
            src="https://images.unsplash.com/photo-1579726670107-e543fc48ddbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
          <div class="success text-center">
            <i class="far fa-check-circle"></i>
            <p class="h2 mt-3">交易成功</p>
            <p class="mb-2">感謝您的訂購，<br>歡迎再度光臨選購。</p>
            <router-link :to="`/`"
              class="btn btn-sm btn-primary rounded-0">繼續購物
            </router-link>
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
.fa-check-circle {
  font-size: 90px;
  color: rgb(170, 170, 170);
}
.success {
  height: 500px;
  padding-top: 100px;
}
.successImg {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  max-width: 800px;
}
</style>
