<template>
  <div @mouseover="mouseOverPrice" class="price">
    <!-- <nav class="price-nav">
      <ul class="price-nav__list">
        <li class="price-nav__item">Соц группы</li>
        <li class="price-nav__item">Реклама</li>
        <li class="price-nav__item">Ещё что?</li>
      </ul>
    </nav> -->
    <div class="price-list">
      <div class="price-item color-1">
        <div class="price-content">
          <div class="price-bg bg-1"></div>
          <div ref="priceCard" class="price-card card elementary ">
            <div class="card__header bg-1">
              <p class="card__description">Необходимый минимум</p>
              <h3 class="card__title">Заголовок</h3>
              <span class="card__price">1000 &#x20bd;</span>
            </div>
            <button class="card__button">Выбрать</button>
            <ul class="card__list">
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
            </ul>
          </div>
          <div class="price-title">
            <span>минимум</span>
          </div>
        </div>
      </div>
      <div class="price-item color-2">
        <div class="price-content">
          <div :style="{ border: borderBg }" class="price-bg bg-2"></div>
          <div ref="priceCard2" class="price-card card middle">
            <div class="card__header bg-2">
              <p class="card__description">Необходимый минимум</p>
              <h3 class="card__title">Заголовок</h3>
              <span class="card__price">1000 &#x20bd;</span>
            </div>
            <button class="card__button">Выбрать</button>
            <ul class="card__list">
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
            </ul>
          </div>
          <div class="price-title">
            <span>средне</span>
          </div>
        </div>
      </div>
      <div class="price-item color-3">
        <div class="price-content">
          <div class="price-bg bg-3"></div>
          <div ref="priceCard3" class="price-card card high">
            <div class="card__header bg-3">
              <p class="card__description">Необходимый минимум</p>
              <h3 class="card__title">Заголовок</h3>
              <span class="card__price">1000 &#x20bd;</span>
            </div>
            <button class="card__button">Выбрать</button>
            <ul class="card__list">
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
            </ul>
          </div>
          <div class="price-title">
            <span>хорошо</span>
          </div>
        </div>
      </div>
      <!-- <div class="price-item color-4">
        <div class="price-content ">
          <div class="price-bg bg-4"></div>
          <div class="price-card right"></div>
          <div class="price-title">
            <span class="color-title">D</span>
          </div>
        </div>
        <div class="price-text">
          <h3>Заголовок</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit atque facilis magni, nisi aliquam blanditiis iure
            vero, ad quo harum natus voluptatibus autem voluptate debitis porro
            praesentium excepturi laborum sed!
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  props: {
    borderBg: {
      type: String,
      default: ''
    }
    // mouseOverPrice: {
    //   type
    // }
  },
  data() {
    return {
      animPriceCard: '',
      widthWindow: 0
    }
  },
  // computed: {
  //   getWidth() {
  //     const mediaQueryList = window.matchMedia('(min-width: 400px)')
  //     return this.widthWindow + mediaQueryList
  //   }
  // },
  // watch: {
  //   getWidth() {
  //     const mediaQueryList = window.matchMedia('(max-width: 575px)').matches
  //     return mediaQueryList
  //   }
  // },
  methods: {
    mouseOverPrice() {
      const mediaQueryList = window.matchMedia('(max-width: 991px)').matches
      if (!mediaQueryList) {
        this.animPriceCard = gsap
          .timeline({
            defaults: { ease: 'power1.inOut', duration: 0.2 }
          })

          .to(this.$refs.priceCard, { top: -25, left: 50 }, 0)
          .to(this.$refs.priceCard2, { top: -25, left: 50 }, 0.2)
          .to(this.$refs.priceCard3, { top: -25, left: 50 }, 0.4)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// color
.bg-1 {
  background: $green;
}

.bg-2 {
  background: $orange;
}

.bg-3 {
  background: $blue;
}

.bg-4 {
  background: $red;
}

.color-1 {
  color: $green;

  & .card::after {
    background: $green;
  }

  &.card__button {
    &:active {
      color: $green;
    }
  }
}

.color-2 {
  color: $orange;

  & .card::after {
    background: $orange;
  }

  &.card__button {
    &:active {
      color: $orange;
    }
  }
}

.color-3 {
  color: $blue;

  & .card::after {
    background: $blue;
  }

  &.card__button {
    &:active {
      color: $blue;
    }
  }
}

.color-4 {
  color: $red;
}

.price {
  &-list {
    margin: 20px 0;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    // align-content: center;
    align-items: center;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px
      justify-content: space-around;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      flex-direction: column;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
    }
  }

  &-item {
    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      padding: 30px;
    }
  }

  &-content {
    grid-area: content;
    position: relative;
    width: 250px;
    height: 400px;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px
      width: 200px;
      height: 350px;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      width: 170px;
      height: 310px;
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      width: 200px;
      height: 350px;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      //   width: 200px;
      //   height: 350px;
    }
  }

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    box-shadow: inset 4px 4px 10px rgb(0, 0, 0),
      inset 4px 4px 15px 3px rgba(0, 0, 0, 0.678),
      inset -1px -1px 2px rgba(255, 255, 255, 0.5),
      inset -1px -1px 5px rgb(255, 255, 255),
      inset -1px -1px 1px rgba(0, 0, 0, 0.274);

    // border: 1px solid rgb(255, 255, 255);

    // border-bottom: 2px solid rgb(255, 255, 255);
    // border-right: 2px solid rgb(255, 255, 255);

    border: 1px solid rgb(75, 75, 75);

    // border-bottom: 2px solid rgba(0, 0, 0, 0.705);
    // border-right: 2px solid rgba(0, 0, 0, 0.5);
  }

  &-card {
    position: absolute;
    // top: -3px;
    // left: 6px;
    z-index: 2;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(145deg, #dfdfdf 30%, #fff);
    box-shadow: 15px 15px 30px 0 rgba(0, 0, 0, 0.801), inset 2px 2px 10px #fff,
      inset -2px -2px 5px rgba(0, 0, 0, 0.1);

    @media (max-width: $md-width-max) {
      // CSS для ширины до 575px (включительно) */
      top: -25px;
      left: 50px;
    }
  }

  &-title {
    position: absolute;
    top: 50%;
    // max-width: 250px;
    // transform: rotate(270deg);
    left: 15px;
    z-index: 1;
    transform-origin: 0 0 0;
    transform: rotate(270deg) translateX(-50%);

    & > span {
      display: inline-block;
      font-size: 30px;
      text-transform: uppercase;
      font-family: 'Rubik Mono One', sans-serif;
      // color: inherit;

      // тень
      text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.5), 0 1px 1px #444;
    }
  }
}

.card {
  overflow: hidden;
  position: relative;
  border: 1px inset rgba(0, 0, 0, 0.096);
  transition: all ease-in-out 0.2s;

  & ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    clip-path: polygon(10% 20%, 50% 100%, 0 100%, 0 50%);
  }

  &:hover,
  :focus {
    transform: scale(1.1);
    transition: all ease-in-out 0.2s;
  }

  &__header {
    clip-path: polygon(100% 0, 100% 85%, 75% 100%, 0 64%, 0 0);
    height: 200px;
    color: #fff;
    padding-top: 20px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      height: 150px;
    }
  }

  &__description {
    padding: 0;
    margin: 0;
    font-size: 1em;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      font-size: 0.9em;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      font-size: 0.8em;
    }
  }

  &__title {
    margin: 0;
    margin-top: 20px;
    text-align: center;
    color: $bg-color;
    font-size: 1.4em;
    text-transform: uppercase;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      font-size: 1.2em;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      font-size: 1em;
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      font-size: 1.2em;
    }
  }

  &__price {
    font-size: 3em;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      font-size: 2.5em;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      font-size: 2.2em;
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      font-size: 2.2em;
    }
  }

  &__button {
    display: block;
    position: relative;
    z-index: 10;
    margin: 0 auto;
    margin-top: -30px;
    padding: 7px 15px;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 5px;
    border: none;
    outline: none;
    background: $bg-color;
    color: #c0c0c0;
    opacity: 0.8;
    cursor: pointer;

    & :hover,
    :focus {
      color: #fff;
      opacity: 1;
    }
  }

  &__list {
    display: flex;
    flex-flow: column wrap;
    margin: 0;
    margin-top: 30px;
    padding: 0;
    font-size: 1.12em;
    align-content: center;
    color: $bg-color;
    list-style: none;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      font-size: 0.9em;
      margin-top: 8px;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      font-size: 0.8em;
      margin-top: 12px;
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      margin-top: 20px;
      font-size: 1em;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
    }
  }

  &__item {
    &::before {
      content: '';
      display: inline-block;
      height: 15px;
      width: 15px;
      background-size: 15px;
      background-image: url('~assets/img/icon/off.png');
      background-repeat: no-repeat;
      margin-right: 10px;
      background-position: center center;
      vertical-align: middle;

      @media (max-width: $lg-width-max) {
        // CSS для ширины от 992px до 1199px */
        font-size: 2.5em;
      }

      @media (max-width: $md-width-max) {
        // CSS для ширины от 768px до 991px */
        font-size: 2.2em;
      }

      @media (max-width: $sm-width-max) {
        // CSS для ширины от 576px до 767px */
        font-size: 2.2em;
      }
    }
  }

  .ok::before {
    background-image: url('~assets/img/icon/ok.png');
  }

  .off::before {
    background-image: url('~assets/img/icon/off.png');
  }
}

@media (max-width: $lg-width-max) {
  // CSS для ширины от 992px до 1199px */
}

@media (max-width: $md-width-max) {
  // CSS для ширины от 768px до 991px */
}

@media (max-width: $sm-width-max) {
  // CSS для ширины от 576px до 767px */
}

@media (max-width: $xs-width-max) {
  // CSS для ширины до 575px (включительно) */
}
</style>
