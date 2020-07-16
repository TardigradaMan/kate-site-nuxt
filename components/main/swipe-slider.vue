<template>
  <client-only>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="item in sliderData" :key="item._id">
        <p class="swiper__text">{{ item.skill }}</p>
      </swiper-slide>
      <!-- <div slot="pagination" class="swiper-pagination"></div> -->
    </swiper>
  </client-only>
</template>

<script>
export default {
  name: 'Carrousel',
  props: {
    sliderData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 40
          },
          1930: {
            slidesPerView: 8,
            spaceBetween: 40
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
// .swiper-wrapper {
//   background: rgb(139, 92, 92);

//   justify-content: center;
// }
.swiper-container {
  width: 100%;
  height: 170px;
  padding: 40px 0;
}

.swiper__text {
  margin: 0;
  padding: 0;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 2px rgb(255, 255, 255);
  opacity: 0.5;
  transition: all ease 0.2s;
  // Неоморфизм
  // background: linear-gradient(324.43deg, #32383e -114.89%, #17191c 124.22%);
  // box-shadow: 12px 12px 58px rgba(0, 0, 0, 0.74),
  //   -12px -10px 32px rgba(195, 200, 205, 0.12);
  // filter: blur(8px);
  // border-radius: 93px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  font-size: 1.3em;
  opacity: 1;
  transition: all 0.2s ease;
  padding: 0 5px;

  // Неоморфизм
  background: $bg-lin1;
  border: 1px solid rgba(95, 95, 95, 0.178);
  border-radius: 12px;
  box-shadow: $shadow-nm1;

  &:hover {
    cursor: grab;
  }

  &:hover .swiper__text {
    opacity: 1;
    transition: all ease 0.2s;
  }
}

.swiper-pagination-bullets {
  bottom: 0;
}

.swiper-pagination-bullet-active {
  background: #f00; // красный цвет для активного квадрата
}
</style>
