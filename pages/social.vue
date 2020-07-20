<template>
  <div>
    <section class="header header-social">
      <div class="wrapper">
        <div class="header__wrapper">
          <h1 class="header__title title-decor">
            А что делать, когда это закончится? <br />Этого никогда не случится.
            Фейсбук как мода, он никогда не закончится
          </h1>
          <h1 class="header__title title-decor header__title--mobile">
            А что делать, когда это закончится? <br />Этого никогда не
            случится.<br />
            Фейсбук как мода, он никогда не закончится
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
    <div class="separator"></div>
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
    <div class="separator"></div>
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
    <div class="separator"></div>
    <section class="form-block form-social ">
      <app-form></app-form>
    </section>
  </div>
</template>
<script>
import appForm from '../components/main/Form'
import appInfo from '../components/main/Infographics'
import appStages from '../components/main/Stages'
import appPrice from '../components/main/Price'
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
  background-attachment: fixed;

  // @media (max-width: $md-width-max) {
  //   // CSS для ширины от 768px до 991px */
  //   background: center / cover url('~assets/img/bg_social-md.jpg') no-repeat;
  // }

  // @media (max-width: $xs-width-max) {
  //   // CSS для ширины до 575px (включительно) */
  //   background: center / cover url('~assets/img/bg_social-xs.jpg') no-repeat;
  // }
}

.header-block {
  color: $grey;

  & .title-decor::after {
    background: $grey;
  }
}

.description {
  background: #eee;
  padding-bottom: 50px;
  // box-shadow: $shadow-block;
}

.stages-social {
  background: #eee;
  padding-bottom: 50px;
  color: $grey;

  @media (max-width: $lg-width-max) {
    /* CSS для ширины от 992px до 1199px */
  }

  @media (max-width: $sm-width-max) {
    /* CSS для ширины от 576px до 767px */
  }

  @media (max-width: $xs-width-max) {
    /* CSS для ширины до 575px (включительно) */
  }
}

.form-social {
  background: #eee;

  @media (max-width: $lg-width-max) {
    /* CSS для ширины от 992px до 1199px */
  }

  @media (max-width: $sm-width-max) {
    /* CSS для ширины от 576px до 767px */
  }

  @media (max-width: $xs-width-max) {
    /* CSS для ширины до 575px (включительно) */
  }
}

.separator {
  width: 100%;
  height: 3vh;
  background: #eee;
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.5),
    inset -3px -3px 5px rgb(255, 255, 255);
}

.price-block {
  background: #eee;
  padding-bottom: 30px;
  // box-shadow: $shadow-block;
}

// Webp
.no-webp {
  .header {
    background: center/cover url('~assets/img/bg_social.jpg') no-repeat;

    @media #{unquote($retina)} {
      background: center/cover url('~assets/img/bg_social@2x.jpg') no-repeat;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      background: center / cover url('~assets/img/bg_social-md.jpg') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_social-md@2x.jpg')
          no-repeat;
      }
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      background: center / cover url('~assets/img/bg_social-xs.jpg') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_social-xs@2x.jpg')
          no-repeat;
      }
    }
  }
}

.webp {
  .header {
    background: center/cover url('~assets/img/bg_social.webp') no-repeat;

    @media #{unquote($retina)} {
      background: center/cover url('~assets/img/bg_social@2x.webp') no-repeat;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      background: center / cover url('~assets/img/bg_social-md.jpg') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_social-md@2x.webp')
          no-repeat;
      }
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      background: center / cover url('~assets/img/bg_social-xs.webp') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_social-xs@2x.webp')
          no-repeat;
      }
    }
  }
}
</style>
