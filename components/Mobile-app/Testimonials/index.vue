<template>
  <section class="app-testim section-padding bg-gray">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
          <div class="s-head text-center mb-80">
            <h6 class="stit mb-30"><span class="left"></span> Clients Feedback <span class="Right"></span></h6>
            <h2>Valuable Clinets Feedback About Our Services</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <swiper
            ref="swiper"
            :options="swiperOptions"
          >
            <swiper-slide class="swiper-slide" v-for="testimonial in testimonials" :key="testimonial.id">
              <div class="item">
                <div class="icon mb-50">
                  <img :src="testimonial['icon-image']" alt="">
                </div>
                <div class="text">
                  <p>
                    {{ testimonial.content }}
                  </p>
                </div>
                <div class="info">
                  <div class="img">
                    <img :src="testimonial.author.image" alt="">
                  </div>
                  <div class="cont">
                    <h6 class="mb-10">{{ testimonial.author.name }}</h6>
                    <span>{{ testimonial.author.position }}</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import testimonials from "../../../data/mobile-app/testimonials.json";

export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials,
      swiperOptions: {
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        parallax: false,
        slidesPerView: 3,
        dots: true,
        pagination: {
          type: "bullets",
          clickable: true,
          el: ".app-testim .swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          767: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          991: {
            slidesPerView: 3,
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    }
  },
  mounted() {
    let swiperContainer = document.querySelector('.app-testim .swiper-container');
    let swiperPagination = document.querySelector('.app-testim .swiper-pagination');

    swiperContainer.appendChild(swiperPagination);
  }
}
</script>
