<template>
  <div class="web">
    <section class="web__head"></section>
    <div class="wrapper">
      <div class="web__description">
        <h1 class="web__title">
          Разработка Landing Page от дизайна до загрузки на hosting
        </h1>
        <button @click="pushToForm" class="button web__button">
          Заказать Landing Page
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    pushToForm() {
      this.$router.push('/contact')
    }
  }
}
</script>
<style lang="scss" scoped>
.web {
  padding-top: 30px;

  &__head {
    height: 100vh;
    text-align: center;
    padding: 0 0 30px;

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      height: 60vmax;
    }
  }

  &__description {
    text-align: center;
    padding: 40px 10px;
  }

  &__title {
    color: #eee;
    padding: 20px 10px;
    border-radius: 10px;
    box-shadow: inset 4px 4px 10px black,
      inset 4px 4px 15px 3px rgba(0, 0, 0, 0.678),
      inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 5px white,
      inset -1px -1px 1px rgba(0, 0, 0, 0.274);
    border: 1px solid #4b4b4b;
    margin-bottom: 40px;

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      font-size: 20px;
    }
  }

  &__button {
    border-radius: 8px;
    box-shadow: -8px -8px 20px #494c52, 1px 8px 30px #101316,
      -1px -1px 60px rgba(33, 39, 44, 0.01);
    transition: all ease-in-out 0.2s;
    width: 300px;
    font-size: 20px;

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      width: 280px;
    }

    &:hover,
    :focus {
      color: #36f780;
    }

    &:active {
      box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
        inset -5px -5px 10px #646464;
      transition: box-shadow ease-in-out 0.2s;
    }
  }
}

// Webp
.no-webp {
  .web__head {
    background: center/cover url('~assets/img/bg-landing-page.png') no-repeat;

    @media #{unquote($retina)} {
      background: center/cover url('~assets/img/bg-landing-page@2x.png')
        no-repeat;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      background: center / cover url('~assets/img/bg-landing-page-md.png')
        no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg-landing-page-md@2x.png')
          no-repeat;
      }
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      background: center / cover url('~assets/img/bg-landing-page-xs.png')
        no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg-landing-page-xs@2x.png')
          no-repeat;
      }
    }
  }
}

.webp {
  .web__head {
    background: center/cover url('~assets/img/bg-landing-page.webp') no-repeat;

    @media #{unquote($retina)} {
      background: center/cover url('~assets/img/bg-landing-page@2x.webp')
        no-repeat;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      background: center / cover url('~assets/img/bg-landing-page-md.webp')
        no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg-landing-page-md@2x.webp')
          no-repeat;
      }
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      background: center / contain url('~assets/img/bg-landing-page-xs.webp')
        no-repeat;

      @media #{unquote($retina)} {
        background: center/contain url('~assets/img/bg-landing-page-xs@2x.webp')
          no-repeat;
      }
    }
  }
}
</style>
