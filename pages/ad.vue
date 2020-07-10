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
          <li class="description__item description__item--central"></li>
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
          Мы уже успели поработать в данных тематиках
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
import appForm from '../components/main/Form'
import appStages from '../components/main/Stages'
import appPrice from '../components/main/Price'

export default {
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

  async asyncData({ store }) {
    const skills = await store.dispatch('content/fetchSkill')

    return { skills }
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
  background: center/cover url('~assets/img/bg_5.jpg') no-repeat;
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
.description {
  padding: 0px 10px 100px;
  // background: rgba(121, 223, 107, 0.329);
  box-shadow: $shadow-out;
  position: relative;
  z-index: 2;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 0;
  //   height: 0;
  //   border-left: 100px solid transparent;
  //   border-right: 100px solid transparent;
  //   border-top: 100px solid rgb(53, 53, 53);

  //   top: 0;
  //   right: 100px;
  //   // transform: rotate(45deg);
  // }
  &::after {
    content: '';
    position: absolute;

    width: 300;
    height: 150;

    border-left: 500px solid $grey;
    border-top: 200px solid transparent;
    // box-shadow: 0 0 10px #000;

    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__title {
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
      min-width: 415px;

      background-image: url('~assets/img/Стул_мой_v1.png');
      // background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
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
        transform: translateY(-50%);
        top: 50%;
        left: 0;

        transform: scale(-1, 1);

        width: 65px;
        height: 65px;
      }
    }
  }
}

.price-block {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
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
</style>
