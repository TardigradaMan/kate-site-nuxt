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
    </section>
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
    <section class="stages">
      <div class="wrapper">
        <ul class="stages__list stage">
          <li class="stages__item stage-1">
            <h3>Стадия 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              optio?
            </p>
          </li>
          <li class="stages__item stage-2">
            <h3>Стадия 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              optio?
            </p>
          </li>
          <li class="stages__item stage-3">
            <h3>Стадия 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              optio?
            </p>
          </li>
          <li class="stages__item stage-4">
            <h3>Стадия 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              optio?
            </p>
          </li>
          <li class="stages__item stage-5">
            <h3>Стадия 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              optio?
            </p>
          </li>
          <li class="stages__item stage-6">
            <h3>Стадия 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              optio?
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="form-block">
      <app-form></app-form>
    </section>
  </div>
</template>
<script>
import appForm from '../components/main/form'
export default {
  components: {
    appForm
  },
  data() {
    return {
      social: {
        stories: {
          title: 'Реклама в историях',
          description:
            'Добавьте рекламу в истории в Instagram в свои материалы. Охватите более 500 млн человек, использующих истории в Instagram каждый день. Узнайте больше о рекламе в историях и ее характеристиках.',
          src: 'Описание_истории.png',
          imgClass: 'grid_1',
          textClass: 'grid_2'
        },
        photo: {
          title: 'Реклама с фото',
          description:
            'Этот простой формат рекламы поможет вам показать свою компанию или товары во всей красе. Можно использовать фото формата пейзажа или квадрата.',
          src: 'Описание_лента.png',
          imgClass: 'grid_4',
          textClass: 'grid_3'
        },
        video: {
          title: 'Видеореклама',
          description:
            'Этот формат дарит все преимущества рекламы с фото плюс движение и звук. Кроме того, теперь вы можете делиться видео длиной до 120 секунд в формате пейзажа или квадрата.',
          src: 'Описание_видео.png',
          imgClass: 'grid_5',
          textClass: 'grid_6'
        }
      }
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
  background: #fff;
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

%arrow {
  content: '';
  position: absolute;
  // top: 50%;
  transform: translateY(-50%);
  // align-items: center;
  right: -90px;
  width: 80px;
  height: 50px;
  background: center/ 100% url('~assets/img/arrow.png') no-repeat;
}
.stages {
  background: rgb(120, 228, 219);
  padding: 50px 0;
  &__list {
    margin: 0;
    padding: 0;
    // background: rgb(56, 118, 122);
    list-style: none;

    display: grid;
    grid-template: 1fr 1fr/ 1fr 1fr 1fr;
    gap: 100px;
  }
  &__item {
    // background: rgb(243, 229, 151);
    padding: 15px;
    position: relative;
    box-shadow: $shadow-out;
    color: $grey;
  }
  & .stage-1::after {
    @extend %arrow;
    top: 50%;
  }
  & .stage-2::after {
    @extend %arrow;
    top: 50%;
  }
  & .stage-3::after {
    @extend %arrow;

    bottom: -80px;

    left: calc(50% - 60px);
    transform: rotate(90deg) translateY(-50%);
  }
  & .stage-4::after {
    @extend %arrow;
    transform: scale(-1, 1) translateY(-50%);
    top: 50%;
  }
  & .stage-5::after {
    @extend %arrow;
    transform: scale(-1, 1) translateY(-50%);
    top: 50%;
  }
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
