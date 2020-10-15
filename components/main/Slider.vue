<template>
  <div @mouseenter="nextSlide()">
    <ul class="skills__list">
      <li v-for="item in sliderData" :key="item._id" class="skills__item">
        {{ item.skill }}
      </li>
      <!-- :style="{ left: x + 320 * index + 'px' }" -->
    </ul>
    <!-- <div class="button-slide">
      <button @click="prevSlide">Назад</button>
      <button @click="nextSlide">Вперед</button>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    sliderData: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentSlide: 0,
      x: -150
    }
  },
  // computed: {
  //   arrSlides: () => {
  //     const removeElement = this.sliderData.shift()
  //     this.sliderData.push(removeElement)
  //   }
  // },
  mounted() {
    if (this.interval > 0) {
      // eslint-disable-next-line prefer-const

      setInterval(() => {
        this.nextSlide()
      }, this.interval)
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlide <= 0) {
        this.currentSlide = this.sliderData.length - 1
      } else {
        this.currentSlide--
      }
      console.log(this.currentSlide)
    },
    // nextSlide() {
    //   if (this.currentSlide >= this.sliderData.length - 1) {
    //     this.currentSlide = 0
    //   } else {
    //     this.currentSlide++
    //   }
    //   console.log(this.currentSlide)
    // }
    nextSlide() {
      // console.log(this.sliderData.length)
      // console.log(this.sliderData[this.sliderData.length - 1])
      const removeElement = this.sliderData.shift()
      this.sliderData.push(removeElement)
      // console.log(this.sliderData)
    }
    // eslint-disable-next-line object-shorthand
  }
}
</script>

<style lang="scss" scoped>
.button-slide {
  position: absolute;
  top: 100px;
}

.skills {
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  &__item {
    margin: 5px;
    padding: 5px;
    flex: 0 0 200px;
    text-align: center;
    font-size: 1.5em;
    border: 2px solid #fff;
    opacity: 0.3;
    border-radius: 7px;
    width: 300px;
    touch-action: pan-y;

    &:hover {
      // transform: scale(1.2);
      opacity: 0.8;
      cursor: grab;
    }
  }
}
</style>
