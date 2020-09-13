<template>
  <div class="home">
    <div class="container">
      <!-- banner -->
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="2000">
            <div class="banner-img1"></div>
            <div class="carousel-caption d-none d-md-block text-left" style="top: 60%">
              <p class="mb-0 h1 text-primary title-eng">L'amour</p>
              <p class="text-primary">︱ 婚戒系列 ︱</p>
              <span class="text-primary">Design by Bien-aimé</span>
            </div>
          </div>
          <div class="carousel-item" data-interval="2000">
            <div class="banner-img2"></div>
            <div class="carousel-caption d-none d-md-block text-left" style="top: 40%">
              <p class="mb-0 h1 text-main title-eng">la Manière</p>
              <p class="text-white">︱ 摩登系列 ︱</p>
              <span class="text-main">Design by Bien-aimé</span>
            </div>
          </div>
          <div class="carousel-item" data-interval="2000">
            <div class="banner-img3"></div>
            <div class="carousel-caption d-none d-md-block text-right" style="top: 50%">
              <p class="mb-0 h1 text-primary title-eng">classical</p>
              <p class="text-primary">︱ 經典系列 ︱</p>
              <span class="text-primary">Design by Bien-aimé</span>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions"
          role="button" data-slide="prev">
          <span class="text-dark h4 mb-0">〈</span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions"
          role="button" data-slide="next">
          <span class="text-dark h4 mb-0">〉</span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <h2 class="title my-md-5 mt-3">Collection</h2>
      <!-- section_1 -->
      <section class="section text-center">
        <div class="section-title" data-aos="fade-up">
          <div class="mb-0 mb-2 py-2 text-primary" style="background-color: rgba(0,0,0,0.1)">
            <h3 class="title-eng">L'amour</h3>
            <small style="font-size: 18px">︱ 婚戒系列 ︱ Bien-aimé 研選</small>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="item-img" data-aos="zoom-in"
              data-aos-duration="3000">
              <div class="img-l"></div>
            </div>
          </div>
          <div class="col-md-7">
            <a href="" class="d-block item-img">
              <div class="mask">
                <div class="caption">More Detail</div>
              </div>
              <router-link
                  :to="`/product/3AqvRNnfpnmOw1yIs9uhWAcABLUClWDEjoBHwdBxDMluscIaTnPLcurk5INpEfV9`"
                  class="d-block item-img">
                  <div>
                    <div class="mask">
                      <div class="caption">More Detail</div>
                    </div>
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="3000"
                      class="img-fluid"
                      src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
                  </div>
                </router-link>
            </a>
            <div class="row mt-2">
              <div class="col-md-6 mb-2">
                <router-link
                  :to="`/product/3AqvRNnfpnmOw1yIs9uhWAcABLUClWDEjoBHwdBxDMluscIaTnPLcurk5INpEfV9`"
                  class="d-block item-img">
                  <div class="mask">
                    <div class="caption">More Detail</div>
                  </div>
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    class="img-fluid"
                    src="https://images.unsplash.com/photo-1589674799058-82430f276350?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="">
                </router-link>
              </div>
              <div class="col-md-6">
                <router-link
                  :to="`/product/cZRIWQYc4wBI6JN0gTmxsVEmWGA2dtfHaJVhqWbmDECsgLbdci3izTkwyXfhL5vr`"
                  class="d-block item-img">
                  <div class="mask">
                    <div class="caption">More Detail</div>
                  </div>
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    class="img-fluid"
                    src="https://images.unsplash.com/photo-1591209695498-d4c00abe85f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="">
                </router-link>
                </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section_2 -->
      <section class="section text-center">
        <div class="section-title" data-aos="fade-up">
          <div class="mb-0 mb-2 py-2 text-primary" style="background-color: rgba(0,0,0,0.1)">
            <h3 class="title-eng">la Manière</h3>
            <small style="font-size: 18px">︱ 摩登系列 ︱ Bien-aimé 設計</small>
          </div>
        </div>
        <div class="row d-flex flex-row-reverse">
          <div class="col-md-5">
            <div class="item-img">
              <div class="img-r"
                data-aos="zoom-out-left" data-aos-delay="300"></div>
            </div>
          </div>
          <div class="col-md-7">
            <a href="" class="d-block item-img">
              <div class="mask">
                <div class="caption">More Detail</div>
              </div>
              <router-link
                  :to="`/product/ex7DaebwGtjt4jguEb7MJE9zRwQwLITvfQZLbCazRXkiAwUK1tKYP0xfi3LMrHAO`"
                  class="d-block item-img">
                  <div class="mask">
                    <div class="caption">More Detail</div>
                  </div>
                  <div class="img-t" data-aos="zoom-out-right"></div>
                </router-link>
            </a>
            <div class="row mt-2">
              <div class="col-md-6 mb-2">
                <router-link
                  :to="`/product/QFSkuL3IlX0cB8k7YVUq3jn2OkfPkzYun4OisJKeiIXJ2uGr6f2AtoXdVbhIz6Bk`"
                  class="d-block item-img">
                  <div class="mask">
                    <div class="caption">More Detail</div>
                  </div>
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    class="img-fluid"
                    src="https://images.unsplash.com/photo-1589422453619-3171862e49d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
                </router-link>
              </div>
              <div class="col-md-6">
                <router-link
                  :to="`/product/ex7DaebwGtjt4jguEb7MJE9zRwQwLITvfQZLbCazRXkiAwUK1tKYP0xfi3LMrHAO`"
                  class="d-block item-img">
                  <div class="mask">
                    <div class="caption">More Detail</div>
                  </div>
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    class="img-fluid"
                    src="https://images.unsplash.com/photo-1588444757641-848a1ea4fa61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
                </router-link>
                </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section_3 -->
      <section class="section text-center">
        <div class="section-title"
          data-aos="fade-up" data-aos-delay="300">
          <div class="mb-0 mb-2 py-2 text-primary" style="background-color: rgba(0,0,0,0.1)">
            <h3 class="title-eng">classical</h3>
            <small style="font-size: 18px">︱ 經典系列 ︱ Bien-aimé 推薦</small>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-md-3">
            <router-link
              :to="`/product/DE2Y4UxbglhZDCBwkfO82p9sEivqRfXHi7fZmS9EMtknbGvhiivgzdIuWFEKNOHI`"
              class="d-block img-change-1 mb-2"
              data-aos="flip-left" data-aos-delay="700">
              <h5 class="img-title">classic<br>
              </h5>
            </router-link>
          </div>
          <div class="col-6 col-md-3">
            <router-link
              :to="`/product/2AtxBa70Zn1dhBAJH3P7rvJ5sxRlrssZjucO3WdLAWusLEAivi3shgbTq9mhd4vk`"
              class="d-block img-change-2 mb-2"
              data-aos="flip-left" data-aos-delay="800">
              <h5 class="img-title">Gold<br>
              </h5>
            </router-link>
          </div>
          <div class="col-6 col-md-3">
            <router-link
              :to="`/product/yrdRk3MdVf1t7fLpU2npCDiAl4LIIkGnGAy7rmLBgp5wfhsmrhdvxCA6wePBKmiu`"
              class="d-block img-change-3 mb-2"
              data-aos="flip-left" data-aos-delay="900">
              <h5 class="img-title">Norway<br>
              </h5>
            </router-link>
          </div>
          <div class="col-6 col-md-3">
            <router-link
              :to="`/product/RnsdIS5AynpfvfAflX4Uy73kUfkwpvr0oCb70I51c54KpH5KJpkAZ4NqB2yMEd81`"
              class="d-block img-change-4"
              data-aos="flip-left" data-aos-delay="1000">
              <h5 class="img-title">Exquisite<br>
              </h5>
            </router-link>
          </div>
        </div>
      </section>
      <!-- <Carousel/> -->
    </div>
  </div>
</template>

<script>
// import Carousel from '@/components/frontend/Carousel.vue';

export default {
  name: 'Home',
  components: {
    // Carousel,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
.title-eng {
  font-family: 'Lora', serif;
  font-style: italic;
  font-weight: 500;
}
h2.title {
  color: #4D4D4D;
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
}
.banner-img1 {
  background-image: url(https://images.unsplash.com/photo-1549488497-94b52bddac5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  height: 600px;
  background-position: center center;
}
.banner-img2 {
  background-image: url(https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1345&q=80);
  background-size: cover;
  height: 600px;
  background-position: center center;
}
.banner-img3 {
  background-image: url(https://images.unsplash.com/photo-1573600073102-d703f3f030ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80);
  // background-size:;
  background-size: 60%;
  background-repeat: no-repeat;
  height: 600px;
  background-position: left 40%;
}
.img-l {
  height: 657px;
  background-image: url(https://images.unsplash.com/photo-1481980235850-66e47651e431?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
  background-size: cover;
  background-position: center center;
}
.img-r {
  height: 657px;
  background-image: url(https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
  background-size: cover;
  background-position: center center;
  transition: ease 0.5s;
  &:hover {
    transform: scale(1.1);
  }
}
.img-t {
  height: 433px;
  background-image: url(https://images.unsplash.com/photo-1596942506460-9123e66e5d84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=619&q=80);
  background-size: cover;
  background-position: center 40%;
}
.item-img {
  overflow: hidden;
}
@media(max-width: 767px) {
  .img-l, .img-r {
    height: 311px;
    margin-bottom: 10px;
  }
  .img-r {
    background-position: center top;
  }
  .banner-img1, .banner-img2, .banner-img3 {
    height: 300px;
  }
  .img-t {
    height: 312px;
  }
}
.img-change-1 {
  height: 200px;
  background-image: url(https://images.unsplash.com/photo-1504257234803-3fa883dcdcc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  background-position: center center;
  transition: 0.3s;
  &:hover {
    background-image: url(https://images.unsplash.com/photo-1595370300166-9584c8aae81d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80,https://images.unsplash.com/photo-1595370300393-f3bae94f0d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  }
}
.img-change-2 {
  height: 200px;
  background-image: url(https://images.unsplash.com/photo-1589128657849-49fd6d28d4b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  background-position: center center;
  transition: 0.3s;
  &:hover {
    background-image: url(https://images.unsplash.com/photo-1589128657906-cf6813f7eeed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  }
}
.img-change-3 {
  height: 200px;
  background-image: url(https://images.unsplash.com/photo-1484876632310-ddb3b48133cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  background-position: center center;
  transition: 0.3s;
  &:hover {
    background-image: url(https://images.unsplash.com/photo-1589674536249-62d7ea50d6e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80,https://images.unsplash.com/photo-1586104180458-e42615276cda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80,https://images.unsplash.com/photo-1589674552723-19e476b514e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80);
  }
}
.img-change-4 {
  height: 200px;
  background-image: url(https://images.unsplash.com/photo-1595370376122-c98ddd48e4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  background-position: center center;
  transition: 0.3s;
  &:hover {
    background-image: url(https://images.unsplash.com/photo-1595370196602-2764525444aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  }
}
.img-title {
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  position: absolute;
  bottom: 0px;
  right: 10px;
  color: white;
  z-index: 200;
}
.carousel-control-prev, .carousel-control-next {
  top: 50%;
  width: 30px;
  height: 65px;
  background-color: #FFF3E9;
  opacity: 1;
}
.carousel-control-prev span {
  transform: translateX(-10px);
}
.carousel-control-next span {
  transform: translateX(10px);
}
</style>
