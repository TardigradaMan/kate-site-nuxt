<template>
  <div class="wrapper">
    <div class="audit">
      <div class="audit__description">
        <div class="audit__wrapper">
          <span>Бесплатно</span>
          <p class="audit__text">
            <!-- <span>Бесплатно</span> -->
            <slot name="text"></slot>
          </p>
        </div>

        <button @click="updateMessageInForm" class="button audit__button">
          бесплатный аудит
        </button>
      </div>
      <div class="audit__img">
        <div class="audit__img--bg"></div>
        <picture>
          <source
            type="image/webp"
            srcset="~assets/img/audit.webp 1x, ~assets/img/audit@2x.webp 2x"
          />
          <img
            src="~assets/img/audit.png"
            srcset="~assets/img/audit.png 1x, ~assets/img/audit@2x.png 2x"
            alt="Аудит рекламы"
            class="audit__img--image"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateMessageInForm() {
      this.$emit('update-message')
    }
  }
}
</script>
<style lang="scss" scoped>
.audit {
  // background: rgba(1, 175, 255, 0.445);
  display: flex;
  justify-content: space-around;
  // justify-content: space-between;
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

  &__wrapper {
    display: flex;
    align-items: center;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      flex-direction: column;
      align-items: baseline;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      align-items: center;
    }

    & > span {
      font-size: 50px;
      font-family: 'Oswald', sans-serif;
      text-transform: uppercase;
    }
  }

  &__description {
    padding: 90px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 700px;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      padding: 0 20px 20px 20px;
      max-width: 600px;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      align-items: center;
    }
  }

  &__text {
    text-align: left;
    margin: 0;
    padding: 5px 0 0 10px;
    font-size: 18px;
    line-height: 28px;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      padding-left: 0;
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      padding: 10px 0 20px;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      text-align: center;
      padding: 10px 0 20px;
    }
  }

  &__button {
    border-radius: 8px;
    // border-right: none;
    box-shadow: -8px -8px 20px #494c52, 1px 8px 30px #101316,
      -1px -1px 60px rgba(33, 39, 44, 0.01);
    transition: all ease-in-out 0.2s;

    &:hover,
    :focus {
      color: $green;
    }

    &:active {
      box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
        inset -5px -5px 10px rgb(100, 100, 100);
      transition: box-shadow ease-in-out 0.2s;
    }
  }

  &__img {
    position: relative;
    width: 350px;
    height: auto;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      width: 350px;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      min-width: 300px;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      display: none;
    }

    &--bg {
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
      border: 1px solid rgb(75, 75, 75);
    }

    &--image {
      padding: 10px;
      width: calc(100% - 20px);
      height: auto;
    }
  }
}

// .optimization-ads {
//   .audit {
//     &__img--bg {
//       box-shadow: inset 4px 4px 10px rgb(0, 0, 0),
//         inset 4px 4px 15px 3px rgba(0, 0, 0, 0.678),
//         inset -1px -1px 2px rgba(255, 255, 255, 0.5),
//         inset -1px -1px 5px rgb(255, 255, 255),
//         inset -1px -1px 1px rgba(0, 0, 0, 0.274);
//       border: 1px solid rgb(75, 75, 75);
//     }

//     &__button {
//       box-shadow: -8px -8px 20px #494c52, 1px 8px 30px #101316,
//         -1px -1px 60px rgba(33, 39, 44, 0.01);

//       // &:active {
//       //   box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
//       //     inset -5px -5px 10px rgb(100, 100, 100);
//       // }
//     }
//   }
// }

.optimization-social {
  .audit {
    &__img--bg {
      box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.5),
        inset -1px -1px 2px rgba(255, 255, 255, 0.5),
        inset -6px -6px 10px 0 rgb(255, 255, 255),
        inset -1px -1px 1px rgba(0, 0, 0, 0.274);
      border: 1px solid rgba(129, 129, 129, 0.164);
      // box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
      //   inset -6px -6px 10px 0 white;
    }

    &__button {
      background: rgb(219, 219, 219);
      border: 1px solid white;
      color: $grey;
      box-shadow: -12px -12px 20px white, 1px 5px 30px rgba(0, 0, 0, 0.274);

      &:hover,
      :focus {
        color: $green;
      }

      &:active {
        box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
          inset -6px -6px 10px #fff;
        transition: box-shadow ease-in-out 0.2s;
      }
    }
  }
}
</style>
