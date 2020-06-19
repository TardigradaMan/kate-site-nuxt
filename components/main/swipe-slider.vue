<template>
  <client-only>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="item in sliderData" :key="item._id">
        {{ item.skill }}</swiper-slide
      >
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

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  font-size: 1.3em;
  opacity: 0.5;
  transition: all 0.2s ease;
  padding: 0 5px;
  &:hover {
    opacity: 1;
    cursor: grab;
    transform: scale(1.1);
    box-shadow: $shadow-into;
    transition: all 0.2s ease;
  }
}

.swiper-pagination-bullets {
  bottom: 0px;
}
.swiper-pagination-bullet-active {
  background: #f00; // красный цвет для активного квадрата
}
</style>
