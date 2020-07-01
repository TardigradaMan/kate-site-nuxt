// fddsfs
<template>
  <div>
    <section class="header">
      <div class="wrapper">
        <div class="header__wrapper">
          <h1 class="header__title title-decor">
            А что делать, когда это закончится? <br />Этого никогда не случится.
            Фейсбук как мода, он никогда не закончится
            <!-- А что делать, когда это закончится? <br />
            Этого никогда не случится. Фейсбук как мода, он никогда не
            закончится. -->
          </h1>
          <p class="header__text subtitle">
            &laquo;The Social Network&raquo; Марк Цукерберг
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
        <app-info></app-info>
      </div>
    </section>
    <!-- <section class="description">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="description__title title-decor title-block">
            Как минимум вы получите
          </h2>
          <p class="description__subtitle subtitle">
            И не придумал
          </p>
        </div>
        <div class="description__wrapper">
          <div class="description-text">
            <ul class="description-text__list">
              <li class="description-text__item">
                <h3 class="description__head">Цена</h3>
                <span>Icon</span>
                <p class="description__body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, doloremque?
                </p>
              </li>
              <li class="description-text__item">
                <h3 class="description__head">Анимация</h3>
                <span>Icon</span>
                <p class="description__body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, doloremque?
                </p>
              </li>
              <li class="description-text__item">
                <h3 class="description__head">Введение</h3>
                <span>Icon</span>
                <p class="description__body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, doloremque?
                </p>
              </li>
              <li class="description-text__item">
                <h3 class="description__head">Аудитория</h3>
                <span>Icon</span>
                <p class="description__body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, doloremque?
                </p>
              </li>
              <li class="description-text__item">
                <h3 class="description__head">Сроки</h3>
                <span>Icon</span>
                <p class="description__body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, doloremque?
                </p>
              </li>
              <li class="description-text__item">
                <h3 class="description__head">Заголовок</h3>
                <span>Icon</span>
                <p class="description__body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, doloremque?
                </p>
              </li>
            </ul>
          </div>
          <div class="description-img">
            <ul class="description-img__list">
              <li class="description-img__item phone">
                <img src="~assets/img/phone.png" alt="phone" />
              </li>
              <li class="description-img__item icon-in"></li>
              <li class="description-img__item icon-fs"></li>
              <li class="description-img__item icon-vk"></li>
            </ul>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section class="social">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="social__title title-decor title-block">
            Тут клевый заголовок. Бла бла бла
          </h2>
          <p class="social__subtitle subtitle">
            А тут клевый подзаголовок. Бла бла бла
          </p>
        </div>
        <div class="social__wrapper">
          <div
            v-for="item in social"
            :key="item.src"
            :style="`grid-area:${item.imgClass}`"
            class="social__item img"
          >
            <img
              :src="require(`../assets/img/${item.src}`)"
              :alt="item.title"
            />
          </div>
          <div
            v-for="item in social"
            :key="item.title"
            :style="`grid-area:${item.textClass}`"
            class="social__item social__item--description"
          >
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.description }}
            </p>
            <button @click="openForm" class="button social__btn">
              Уже хочу
            </button>
          </div>
        </div>
      </div>
    </section> -->
    <section class="stages-social">
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
    <section class="form-block">
      <app-form></app-form>
    </section>

    <section class="test">
      <div class="test-bgs"><div class="test-s"></div></div>
      <div class="test-bgc">
        <div class="test-c">
          <div class="test-c-c">
            <p>R</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import appForm from '../components/main/form'
import appInfo from '../components/main/infographics'
import appStages from '../components/main/stages'
import appPrice from '../components/main/price'
export default {
  components: {
    appForm,
    appInfo,
    appStages,
    appPrice
  },
  data() {
    return {}
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
  background: $grey;
  background: center/cover url('~assets/img/bg_6.jpg') no-repeat;
  background-attachment: fixed;
}
.header__title {
  font-size: 24px;
  line-height: 40px;
  text-align: center;
}
.social {
  width: 100%;
  background: #fff;
  padding-bottom: 100px;
  &__wrapper {
    display: grid;

    grid-template-areas:
      'grid_1 grid_2'
      'grid_3 grid_4'
      'grid_5 grid_6';

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 500px);
    gap: 30px;
  }

  &__title {
    color: $grey;
    &::after {
      background: $grey;
    }
  }

  &__subtitle {
    color: $grey;
  }

  &__item {
    box-shadow: $shadow-out;
    position: relative;
    min-width: 250px;
    border-radius: 5px;
    background-color: #ffffff;
    color: $grey;
    & > img {
      display: block;
      margin: 0 auto;

      height: 100%;
      width: auto;
    }
    &--description {
      text-align: center;
      & > h3 {
        font-size: 1.5em;
        padding: 10px;
      }
      & > p {
        font-size: 1.2em;
        padding: 10px;
      }
    }
  }
  &__btn {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.header-block {
  color: $grey;
  & .title-decor::after {
    background: $grey;
  }
}

.description__wrapper {
  display: flex;
  justify-content: space-around;
  height: 100%;
}
.description {
  background: #eeeeee;
  padding-bottom: 50px;
  &-text {
    width: 47%;
    align-items: stretch;
    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;

      display: grid;
      /* grid-template-rows / grid-template-columns values */
      grid-template: 1fr 1fr 1fr/ 1fr 1fr;
      gap: 10px;
    }
    &__item {
      padding: 15px;
      background: #fff;
      box-shadow: $shadow-out;
    }
  }
  &__head {
    margin: 0;
    color: $grey;
  }

  &__body {
    color: $grey;
  }
  & span {
    color: $grey;
  }

  &-img {
    width: 47%;
    align-items: stretch;
    // background: rgb(255, 202, 159);

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;

      display: grid;
      /* grid-template-rows / grid-template-columns values */
      grid-template: repeat(6, 1fr) / 1fr 1fr;
      grid-template-areas:
        '. icon-in'
        'phone icon-in'
        'phone icon-fs'
        'phone icon-fs'
        'phone icon-vk'
        '. icon-vk';
      gap: 20px;
    }
    &__item {
      &.phone {
        grid-area: phone;
        // background: center/contain url('~assets/img/phone.png') no-repeat;
        & img {
          width: 100%;
          height: auto;
        }
      }
      &.icon-in {
        margin: 20px;
        grid-area: icon-in;
        background: center/contain url('~assets/img/in.png') no-repeat;
      }
      &.icon-fs {
        margin: 20px;
        grid-area: icon-fs;
        background: center/contain url('~assets/img/fs.png') no-repeat;
      }
      &.icon-vk {
        margin: 20px;
        grid-area: icon-vk;
        background: center/contain url('~assets/img/vk.png') no-repeat;
      }
    }
  }
}
.stages-social {
  background: rgb(120, 228, 219);
  padding-bottom: 50px;
}

.test {
  height: 500px;
  padding: 20px 0;
  &-bgs {
    background: #eeeeee;
    padding: 20px;
  }
  &-s {
    width: 200px;
    height: 200px;
    padding: 0;
    margin: 0 auto;

    background: #eeeeee;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    box-shadow: -6px -6px 26px rgba(255, 255, 255, 0.83),
      6px 6px 16px rgba(217, 210, 200, 0.51);
  }

  &-bgc {
    background: #eeeeee;
    padding: 20px;
  }
  &-c {
    width: 200px;
    height: 240px;
    margin: 0 auto;
    position: relative;

    background: linear-gradient(
      93.84deg,
      #2f3439 -72.68%,
      #26292e 26.94%,
      #17191c 185.78%
    );
    box-shadow: 22px 22px 60px rgba(0, 0, 0, 0.5),
      -5px -6px 16px rgba(195, 200, 205, 0.04);
    border-radius: 16px;

    &-c {
      position: absolute;
      width: 96px;
      height: 96px;
      left: 52px;
      top: 95px;

      background: linear-gradient(324.43deg, #32383e -114.89%, #17191c 124.22%);
      box-shadow: 12px 12px 58px rgba(0, 0, 0, 0.74),
        -12px -10px 32px rgba(195, 200, 205, 0.12);
      filter: blur(8px);
      border-radius: 93px;
      & > p {
        filter: blur(0);
      }
    }
  }
}

.price-block {
  background: #eeeeee;
  padding-bottom: 50px;
}

@media screen and(max-width: $mobile-width) {
  .social {
    grid-template-areas:
      'grid_1'
      'grid_2'
      'grid_4'
      'grid_3'
      'grid_5'
      'grid_6';

    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 300px);
    &__item {
      min-width: 320px;
    }
    & > img {
      max-width: 450px;
    }
  }
}
</style>
