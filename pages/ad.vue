<template>
  <div class="advertising">
    <section class="header">
      <div class="wrapper">
        <div class="header__wrapper">
          <h1 class="header__title title-decor">
            Доступная реклама в интернете
          </h1>
          <p class="header__text subtitle">
            Делать деньги без рекламы может только монетный двор
          </p>
          <span class="scroll"> </span>
        </div>
      </div>
    </section>

    <section class="description">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="description__title title-decor title-block">
            Как минимум вы получите
          </h2>
          <p class="description__subtitle subtitle">
            И не придумал
          </p>
        </div>

        <ul class="description__list">
          <li class="description__item description__item--left">
            <h3>Полная прозрачность</h3>
            <p>
              Отчеты и бла бла бла. Excepturi, perferendis? Rem, odit minima
              deserunt deleniti totam consequuntur fugiat esse quasi corrupti
              nihil temporibus quidem perferendis quisquam accusamus molestiae
              quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--right">
            <h3>Индивидуальный подход</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--central">
            <picture>
              <source
                type="image/webp"
                srcset="
                  ~assets/img/Стул_мой_v1.webp    1x,
                  ~assets/img/Стул_мой_v1@2x.webp 2x
                "
              />
              <img
                src="~assets/img/Стул_мой_v1.png"
                srcset="
                  ~assets/img/Стул_мой_v1.png    1x,
                  ~assets/img/Стул_мой_v1@2x.png 2x
                "
                alt="Заказать рекламу в Яндекс и Google"
                class="description__item-img"
              />
            </picture>
          </li>
          <li class="description__item description__item--left">
            <h3>Честная цена</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--right">
            <h3>Поддержка 24 часа</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section class="stages-ads">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="description__title title-decor title-block">
            Как будет проходить работа
          </h2>
          <p class="description__subtitle subtitle">
            И не придумал
          </p>
        </div>
        <app-stages>
          <template v-slot:title1>
            Мой заголовок
          </template>
          <template v-slot:text1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, in!
          </template>
          <template v-slot:title2>
            Мой заголовок2
          </template>
          <template v-slot:text2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, in!
          </template>
          <template v-slot:title3>
            Мой заголовок3
          </template>
          <template v-slot:text3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, in!
          </template>
          <template v-slot:title4>
            Мой заголовок4
          </template>
          <template v-slot:text4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, in!
          </template>
          <template v-slot:title5>
            Мой заголовок5
          </template>
          <template v-slot:text5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, in!
          </template>
          <template v-slot:title6>
            Мой заголовок6
          </template>
          <template v-slot:text6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, in!
          </template>
        </app-stages>
      </div>
    </section>
    <section class="price-block">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="description__title title-decor title-block">
            Ловешечка за дельца наши
          </h2>
          <p class="description__subtitle subtitle">
            И не придумал
          </p>
        </div>
        <app-price></app-price>
      </div>
    </section>
    <section class="skills">
      <div class="header-block">
        <h2 class="skills__title title-decor title-block">
          Мы уже успели поработать <br />
          в данных тематиках
        </h2>
        <p class="skills__subtitle subtitle">
          И это далеко не всё, с чем мы работали
        </p>
      </div>
      <app-swipe-slider :sliderData="skills"></app-swipe-slider>
    </section>
    <section class="form-block form-ads">
      <app-form></app-form>
    </section>
  </div>
</template>
<script>
import appSwipeSlider from '../components/main/swipe-slider'
import appForm from '../components/main/form'
import appStages from '../components/main/stages'
import appPrice from '../components/main/price'

import { mapState } from 'vuex'

export default {
  head: {
    title: 'Реклама в сетях Яндекс, Google и других'
  },
  components: {
    appSwipeSlider,
    appForm,
    appStages,
    appPrice
  },
  data() {
    return {
      border: '2px solid #fff'
    }
  },

  computed: {
    ...mapState({
      skills: state => state.content.sliderSkills
      // skills: 'content/sliderSkills'
    })
  },

  async asyncData({ store, error }) {
    try {
      await store.dispatch('content/fetchSkill')
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Тематики не найдены или сервер не доступен'
      })
    }
  },

  methods: {
    openForm() {
      this.$router.push('/contact')
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background: rgb(162, 224, 236);
  // background: center/cover url('~assets/img/bg_ads.jpg') no-repeat;
  background-attachment: fixed;

  &__title {
    color: rgb(68, 69, 70);

    &::after {
      background-color: rgb(68, 69, 70);
      transform: scale(1.2, 1);
    }
  }

  &__text {
    color: rgb(68, 69, 70);
  }
}

// Webp
.no-webp {
  .header {
    background: center/cover url('~assets/img/bg_ads.jpg') no-repeat;

    @media #{unquote($retina)} {
      background: center/cover url('~assets/img/bg_ads@2x.jpg') no-repeat;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      background: center / cover url('~assets/img/bg_ads-md.jpg') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_ads-md@2x.jpg') no-repeat;
      }
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      background: center / cover url('~assets/img/bg_ads-xs.jpg') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_ads-xs@2x.jpg') no-repeat;
      }
    }
  }
}

.webp {
  .header {
    background: center/cover url('~assets/img/bg_ads.webp') no-repeat;

    @media #{unquote($retina)} {
      background: center/cover url('~assets/img/bg_ads@2x.webp') no-repeat;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      background: center / cover url('~assets/img/bg_ads-md.webp') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_ads-md@2x.webp') no-repeat;
      }
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      background: center / cover url('~assets/img/bg_ads-xs.webp') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_ads-xs@2x.webp') no-repeat;
      }
    }
  }
}

.description {
  padding: 0 10px 100px;
  // background: rgba(121, 223, 107, 0.329);
  box-shadow: $shadow-out;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    border-left: 500px solid $grey;
    border-top: 200px solid transparent;
    // filter: drop-shadow(0 -3px 8px #000);
    // box-shadow: ;

    bottom: 0;
    left: 0;
    z-index: 1;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      border-left: 300px solid $grey;
      border-top: 180px solid transparent;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      // border-left: 150px solid $grey;
      // border-top: 50px solid transparent;
    }
  }

  &__list {
    display: grid;

    /* grid-template-rows / grid-template-columns values */
    grid-template: 1fr 1fr/ 1fr 1fr 1fr;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0 auto;
    margin-top: 40px;
    position: relative;
    z-index: 3;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      grid-template: 1fr auto auto 1fr / 1fr 1fr;
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      grid-template: 1fr 1fr auto auto 1fr 1fr/ 1fr;
    }
  }

  &__item {
    // background: rgb(89, 169, 189);
    box-shadow: $shadow-out;
    padding: 10px;
    border-radius: 10px;

    &--left {
      text-align: right;
      padding-right: 70px;
      position: relative;
      background: rgba(53, 118, 192, 0.1);

      & > p {
        padding-left: 15px;
      }

      &::after {
        content: '';
        background-image: url('~assets/img/icon_descript.png');
        background-size: cover;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        width: 65px;
        height: 65px;
      }
    }

    &--central {
      text-align: center;
      grid-row: 1/3;
      grid-column: 2/3;
      align-self: center;
      min-width: 400px;
      // background-image: url('~assets/img/Стул_мой_v1.png');
      // background-size: contain;
      // background-repeat: no-repeat;
      // background-position: center;

      @media (max-width: $lg-width-max) {
        // CSS для ширины от 992px до 1199px */
        // grid-row: 2/3;
        // grid-column: 1/3;
        // min-width: 400px;
      }

      @media (max-width: $md-width-max) {
        // CSS для ширины от 768px до 991px */
        // min-width: 768px;
        grid-row: 2/4;
        grid-column: 1/3;
        // justify-self: center;
      }

      @media (max-width: $sm-width-max) {
        // CSS для ширины от 576px до 767px */
      }

      @media (max-width: $xs-width-max) {
        // CSS для ширины до 575px (включительно) */
        grid-row: 3/5;
        grid-column: 1/2;
        min-width: 260px;
        justify-self: auto;
      }
    }

    &--right {
      text-align: left;
      padding-left: 70px;
      position: relative;
      background: rgba(53, 118, 192, 0.1);

      & > p {
        padding-right: 15px;
      }

      &::before {
        content: '';
        background-image: url('~assets/img/icon_descript.png');
        background-size: cover;
        position: absolute;
        transform: translateY(-50%) scale(-1, 1);
        top: 50%;
        left: 0;
        width: 65px;
        height: 65px;
      }
    }

    &-img {
      width: 100%;
      height: auto;

      @media (max-width: $md-width-max) {
        // CSS для ширины от 768px до 991px */
        // min-width: 768px;
        width: 50vmin;
      }

      @media (max-width: $xs-width-max) {
        // CSS для ширины от 768px до 991px */
        // min-width: 768px;
        min-width: 80vmin;
      }
    }
  }
}

.price-block {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  padding-bottom: 30px;
}

.skills {
  // background: $grey;
  padding: 20px 0;
}

.form-block {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.stages-ads {
  // background: rgb(162, 255, 109);
  padding-bottom: 50px;
  color: #eee;
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
