<template>
  <div>
    <section class="header header-social">
      <div class="wrapper">
        <div class="header__wrapper">
          <h1 class="header__title title-decor">
            Реклама в социальных сетях
          </h1>
          <p class="header__text subtitle">
            А что делать, когда это закончится? Этого никогда не случится.<br />
            Фейсбук как мода, он никогда не закончится
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
import appForm from '../components/main/form'
import appInfo from '../components/main/infographics'
import appStages from '../components/main/stages'
import appPrice from '../components/main/price'
export default {
  head: {
    title: 'Реклама в социальных сетях'
  },
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
