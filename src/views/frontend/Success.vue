<template>
  <div>
    <div class="container pt-md-5 mt-5">
      <ul class="step list-unstyled d-flex text-center
        justify-content-center pb-5 text-primary">
        <li class="pb-3">
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
    <div class="container success-area">
      <div class="row">
        <div class="col px-0 px-md-3">
          <div class="successImg"></div>
          <div class="success text-center">
            <i class="far fa-check-circle"></i>
            <p class="h2 mt-3">交易成功</p>
            <p class="mb-2 success-txt">感謝您的訂購，<br>歡迎再度光臨選購。</p>
            <router-link to="/"
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
  name: 'Success',
};
</script>

<style lang="scss">
.fa-check-circle {
  font-size: 90px;
  color: rgb(170, 170, 170);
}
.success {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.successImg {
  background-image: url(https://images.unsplash.com/photo-1579726670107-e543fc48ddbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  height: 578px;
}
@media (max-width: 767px) {
  .successImg {
    height: 430px;
  }
  .push {
    height: 0px;
  }
}
.success-txt {
  font-size: 18px;
  line-height: 30px;
}
</style>
