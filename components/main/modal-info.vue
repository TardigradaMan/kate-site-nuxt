<template>
  <div>
    <sprite-icon></sprite-icon>
    <div class="info open">
      <div class="info__wrapper">
        <div class="contacts__wrapper">
          <header class="info__header">
            <p class="info__text">
              У вас есть вопросы? Нажмите на
            </p>
          </header>
          <div class="contacts">
            <div class="contacts__content">
              <ul class="contacts__list">
                <li class="contacts__item">
                  <a
                    class="contacts__link"
                    href=" https://wa.me/79236510335?text=Вопрос%20с%20сайта"
                    ><span class="item__title">
                      <svg class="icon">
                        <use xlink:href="#icon-whatsapp"></use></svg
                    ></span>
                    <span class="item__contact">8 923 651 0335</span>
                  </a>
                </li>
                <li class="contacts__item">
                  <a class="contacts__link" href="https://t.me/fadin_ivan">
                    <span class="item__title">
                      <svg class="icon">
                        <use xlink:href="#icon-telegram"></use></svg
                    ></span>
                    <span class="item__contact">8 923 167 3783</span>
                  </a>
                </li>
                <li class="contacts__item">
                  <a class="contacts__link" href="tel:+79236510335">
                    <span class="item__title">
                      <svg class="icon">
                        <use xlink:href="#icon-phone"></use></svg
                    ></span>
                    <span class="item__contact">8 923 651 0335</span>
                  </a>
                </li>
                <li class="contacts__item">
                  <a class="contacts__link" href="mailto:pochta@pochta.ru">
                    <span class="item__title">
                      <svg class="icon">
                        <use xlink:href="#icon-dribbble"></use></svg
                    ></span>
                    <span class="item__contact">pochta@pochta.ru</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <footer class="info__footer">
            <p class="info__text">
              У вас есть вопросы? Нажмите на желаемый способ связи и мы сразу
              вам ответим
            </p>
          </footer>
        </div>
      </div>
      <button @click="closeInfo" class="info__button--close">
        Закрыть это
      </button>
      <div class="info-title">
        <span>Контакты</span>
      </div>
    </div>
  </div>
</template>

<script>
// import Message from '@/components/main/chat/Message'
// import ChatForm from '@/components/main/chat/ChatForm'
// import AppForm from '@/components/main/form'
import spriteIcon from '@/components/main/svg/sprite-icon'

export default {
  components: { spriteIcon },
  props: {
    closeInfo: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      showInfo: false
    }
  },
  computed: {
    sendMessage() {
      return this.message
    }
  },
  methods: {
    openInfo() {
      this.showInfo = !this.showInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  z-index: 100;

  &__wrapper {
    position: relative;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;

    height: 100%;
    margin-left: 70%;
    background: rgb(36, 34, 34);
    box-shadow: 0 0 15px #000;
    z-index: 101;

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      margin-left: 60%;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      margin-left: 40%;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      margin-left: 20%;
    }
  }

  &-title {
    position: absolute;
    top: 50%;
    // max-width: 250px;
    // transform: rotate(270deg);
    left: calc(70% + 10px);
    z-index: 103;
    transform-origin: 0 0 0;
    transform: rotate(270deg) translateX(-50%);

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      left: calc(60% + 10px);
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      left: calc(40% + 10px);
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      left: calc(20% + 10px);
    }

    & > span {
      display: inline-block;
      color: rgb(32, 31, 31);
      font-size: 50px;
      text-transform: uppercase;
      font-family: 'Rubik Mono One', sans-serif;

      // тень
      text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.315),
        0 -1px 1px rgba(0, 0, 0, 0.836);
    }
  }

  &__title {
    margin: 0;
  }

  &__content {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
  }
}

.info__button--close {
  //
  position: absolute;
  top: 50%;
  left: calc(70% - 25px);
  transform-origin: top left;
  transform: rotate(270deg) translateX(-50%);
  z-index: 100;
  //

  padding: 8px 8px;
  border-radius: 10px 10px 0 0;
  border: none;
  width: 150px;
  background: $red;
  color: #eee;
  text-transform: uppercase;
  font-size: 0.8em;
  outline: none;
  outline-offset: 0;

  @media (max-width: $lg-width-max) {
    // CSS для ширины от 992px до 1199px */
    left: calc(60% - 25px);
  }

  @media (max-width: $md-width-max) {
    // CSS для ширины от 768px до 991px */
  }

  @media (max-width: $sm-width-max) {
    // CSS для ширины от 576px до 767px */
    left: calc(40% - 25px);
  }

  @media (max-width: $xs-width-max) {
    // CSS для ширины до 575px (включительно) */
    left: calc(20% - 25px);
  }

  &:hover,
  :active {
    cursor: pointer;
    opacity: 0.7;
  }
}

.contacts {
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &__wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    padding-left: 20px;
  }

  &__list {
    list-style: none;
    padding-left: 70px;
    margin: 0;
  }

  &__item {
    margin-bottom: 20px;
    height: 2em;

    & span {
      display: inline-block;
    }
  }

  &__link {
    display: flex;
    align-items: center;
  }
}

.item__title {
  font-size: 1.2em;
}

.item__contact {
  margin-left: 25px;
  font-size: 1.2em;
}

.icon {
  width: 2em;
  height: 2em;
}

.info__header {
  padding: 0 30px;
  text-align: center;
}

.info__footer {
  padding: 0 30px;
  text-align: center;
}

.info__text {
  // padding: 0;
  // margin: 20px 0;
}
// .chat {
//   position: absolute;
//   top: 0;
//   right: 0;
//   left: 0;
//   bottom: 80px;
//   padding: 1rem;
//   overflow-y: auto;

//   // min-width: 390px;
//   // height: 50px;
//   // padding-left: 8px;
//   // padding-right: 8px;
//   // margin-bottom: 40px;
//   // border-radius: 8px;
//   // border: 0;
//   background: #eeeeee;
//   font-size: 14px;
//   line-height: 22px;
//   box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
//     inset -6px -6px 10px 0 white;
//   &__wrapper {
//     margin: 0 auto;
//     width: 30vmax;
//     height: 300px;
//     position: relative;
//     overflow: hidden;

//     border-radius: 10px;

//     background: #ac9e9e;
//   }
//   &__form {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     padding: 1rem;
//     height: 80px;
//     background: #eee;

//     border-radius: 10px;

//     width: 100%;
//   }
// }
</style>
