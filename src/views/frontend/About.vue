<template>
  <div class="container">
    <div class="about-bn">
      <div class="text-center text-muted">
        <div class="about-bn-inner">
          <h2 class="pt-2">堅持最優質</h2>
          <span>Bien-aimé 創立於 2010 年，堅持研選最高品質，搭配純手工製作，</span>
          <br>
          <span>讓講求生活品味與細節的您，能感受到我們的用心。</span>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="title mb-5">About</h2>
      <div class="box">
        <div class="box-list d-md-flex d-block"
          data-aos="fade-up">
          <div class="box-list-img w-md-50 w-100">
            <img class="img-fluid"
              alt="2010 品牌誕生"
              src="https://images.unsplash.com/photo-1582738410730-9adf4fa313f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          </div>
          <div class="box-list-txt w-md-50 w-100"
            data-aos="fade-up" data-aos-delay="500">
            <div class="box_list_txt_r">
                <p class="date">since 2010</p>
                <div class="box6_list_txt_g">
                  <h3 class="mb-0">誕生</h3>
                  <small>Elegant & meticulous</small>
                  <p class="mt-3 mb-5">以優雅細緻為創作理念，力臻極佳品質。</p>
                </div>
              </div>
          </div>
        </div>
        <div class="box-list d-md-flex d-block flex-row-reverse">
          <div class="box-list-img w-md-50 w-100"
            data-aos="fade-up" data-aos-delay="1500">
            <img class="img-fluid"
              alt="2012 設計產品"
              src="https://images.unsplash.com/photo-1586104130901-cb09c211fa15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          </div>
          <div class="box-list-txt w-md-50 w-100"
            data-aos="fade-up" data-aos-delay="1000">
            <div class="box_list_txt_l">
                <p class="date">since 2012</p>
                <div class="box6_list_txt_g">
                  <h3 class="mb-0">華麗</h3>
                  <small>Gorgeous & Petal</small>
                  <p class="mt-3 mb-5">以花瓣為設計理念，營造華麗耀眼的光芒。</p>
                </div>
              </div>
          </div>
        </div>
        <div class="box-list d-md-flex d-block">
          <div class="box-list-img w-md-50 w-100"
            data-aos="fade-up">
            <img class="img-fluid"
              alt="2014 設計產品"
              src="https://images.unsplash.com/photo-1586104213933-81064a20b5e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
          </div>
          <div class="box-list-txt w-md-50 w-100"
            data-aos="fade-up" data-aos-delay="500">
            <div class="box_list_txt_r">
                <p class="date">since 2014</p>
                <div class="box6_list_txt_g">
                  <h3 class="mb-0">永恆</h3>
                  <small>Classic & Eternal</small>
                  <p class="mt-3 mb-5">以簡約經典為設計主軸，創造無限永恆。</p>
                </div>
              </div>
          </div>
        </div>
        <div class="box-list d-md-flex d-block flex-row-reverse">
          <div class="box-list-img w-md-50 w-100"
            data-aos="fade-up" data-aos-delay="1000">
            <img class="img-fluid"
              alt="2016 設計產品"
              src="https://images.unsplash.com/photo-1547738238-5ddb16bef15f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          </div>
          <div class="box-list-txt w-md-50 w-100"
            data-aos="fade-up" data-aos-delay="500">
            <div class="box_list_txt_l">
                <p class="date">since 2016</p>
                <div class="box6_list_txt_g">
                  <h3 class="mb-0">時尚</h3>
                  <small>Modern & Fashion</small>
                  <p class="mt-3 mb-5">以平日都適合搭配為理念，創造現代時尚美學</p>
                </div>
              </div>
          </div>
        </div>
        <div class="box-list d-md-flex d-block">
          <div class="box-list-img w-md-50 w-100"
            data-aos="fade-up" data-aos-delay="1500">
            <img class="img-fluid"
              alt="2018 設計產品"
              src="https://images.unsplash.com/photo-1567523977592-7959bc5df51e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1291&q=80">
          </div>
          <div class="box-list-txt w-md-50 w-100"
            data-aos="fade-up" data-aos-delay="2000">
            <div class="box_list_txt_r">
                <p class="date">since 2018</p>
                <div class="box6_list_txt_g">
                  <h3 class="mb-0">刻字</h3>
                  <small>Unique & Lettering</small>
                  <p class="mt-3 mb-5">最新刻字服務，讓您的商品獨一無二。</p>
                </div>
              </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <button class="btn btn-primary px-4"
            @click="goPage">選購去</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
    };
  },
  methods: {
    // 到單一產品細節頁面
    goPage() {
      this.$router.push('/products');
    },
  },
};
</script>

<style lang="scss">
.about-bn {
  height: 600px;
  background-size: 70%;
  background-position: center center;
  background-image: url(https://images.unsplash.com/photo-1587947330318-88fcd9055420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1304&q=80);
  z-index: 1;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0 auto;
}
.about-bn-inner {
  padding-top: 460px
}
@media (max-width: 767px) {
  .about-bn {
    height: 300px;
    background-size: cover;
    background-position: center center;
    background-attachment: initial;
  }
  .about-bn-inner {
    font-size: 12px;
    padding-top: 220px
  }
}
h2.title {
  color: #4D4D4D;
  padding-bottom: 12px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
}
.box-list-img {
  overflow: hidden;
}
.box-list-img img {
  filter: grayscale(80%);
  transition: ease-out 0.5s;
  cursor: pointer;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }
}
.box_list_txt_r {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 120px;
  text-align: left;
}
.box_list_txt_l {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}
@media(max-width: 767px) {
  .box_list_txt_r {
    position: initial;
    top: 0%;
    transform: translateY(0%);
    padding-left: 0px;
  }
  .box_list_txt_l {
    position: initial;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
  }
}
</style>
