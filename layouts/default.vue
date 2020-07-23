<template>
  <div>
    <header class="header">
      <div
        @click="showMenu"
        :class="{ toggle__open: showNav, toggle__black: scrolled }"
        class="menu-toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <transition name="fade">
        <nav-vertical @close="showMenu" v-if="showNav"></nav-vertical>
      </transition>
    </header>
    <main class="main">
      <nuxt />
    </main>
    <transition v-if="!showInfo" name="toggle">
      <div :class="{ hidden: !showToggleInfo }" class="info__toggle">
        <button @click="openInfo" class="info__button contact">
          Только спросить
        </button>
        <span class="info__toggle-icon">
          <img src="~assets/img/icon/conversation.png" alt="" />
        </span>
      </div>
    </transition>
    <transition name="info">
      <modal-info :closeInfo="openInfo" v-if="showInfo"></modal-info>
    </transition>

    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
// import AppFooter from '@/components/main/Footer'
import NavVertical from '@/components/main/navigation-vertical'
import ModalInfo from '@/components/main/modal-info'

export default {
  components: {
    // AppFooter,
    NavVertical,
    ModalInfo
  },

  data() {
    return {
      showNav: false,
      scrolled: false,
      showInfo: false,
      showToggleInfo: true
    }
  },
  // computed: {
  //   hidden() {
  //     if (this.$route.path === '/') {
  //       return (this.showToggleInfo = false)
  //     }
  //   }
  // },
  watch: {
    $route() {
      if (this.showNav) {
        this.showNav = !this.showNav
      }

      if (this.scrolled) {
        this.scrolled = !this.scrolled
      }

      if (this.$route.path === '/') {
        this.showToggleInfo = false
      } else {
        this.showToggleInfo = true
      }
    }
  },
  beforeMount() {
    if (this.$route.path === '/') {
      this.showToggleInfo = false
    }
  },

  mounted() {
    document.addEventListener(
      'scroll',
      this.changeColorToggle
      // console.log(document.documentElement.clientHeight, 'scroll add')
    )
  },

  beforeDestroy() {
    document.removeEventListener(
      'scroll',
      this.changeColorToggle,

      console.log('beforeDestroy')
    )
  },

  methods: {
    showMenu() {
      this.showNav = !this.showNav
    },
    changeColorToggle() {
      if (this.$route.path === '/social') {
        this.scrolled = window.scrollY > document.documentElement.clientHeight
        console.log('metod scroll')
      }
    },
    openInfo() {
      this.showInfo = !this.showInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  overflow: hidden;
  display: none;
}

.header {
  position: fixed;
  z-index: 100;
  top: 10px;
  left: 10px;
  height: 35px;

  // background-color: rgba($bg-color, 0.95);

  &__scroll {
    width: 100vw;
    background-color: #00000080;
    transition: all 0.5s ease-in-out;
  }

  &__icon {
    position: fixed;
    cursor: pointer;
    z-index: 1000;
    display: flex;

    img {
      height: 35px;
    }
  }
}

.menu-toggle {
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 45px;
  z-index: 101;
  margin: 15px;

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
    margin-top: 1px;
    margin-left: 5px;
  }

  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 2px;
    margin: 10px 0;
    background: white;

    &:nth-child(1) {
      transition: all 0.5s ease 0s;
    }

    &:nth-child(2) {
      transition: all 0.4s ease 0s;
    }

    &:nth-child(3) {
      transition: all 0.3s ease 0s;
    }
  }

  &.toggle__black {
    span {
      background: $grey;
    }
  }

  &:hover span {
    transform: rotate3d(0, 1, 0.1, 180deg);
    transition: all 0.5s ease 0s;
  }

  &.toggle__open {
    span {
      position: absolute;
      top: 25%;
      left: 0;
      opacity: 0;
      background: white;

      &:nth-child(1) {
        opacity: 1;
        transform: rotate3d(0, 0, 1, 45deg);
      }

      &:nth-child(3) {
        opacity: 1;
        transform: rotate3d(0, 0, 1, 135deg);
      }
    }

    &:hover {
      span {
        transition: all 0.3s ease 0s;

        &:nth-child(1) {
          transform: rotate3d(0, 0, 1, 25deg);
        }

        &:nth-child(3) {
          transform: rotate3d(0, 0, 1, 155deg);
        }
      }
    }
  }
}

.fade-enter-active {
  opacity: 1;
  transition: all 0.3s ease;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

main {
  width: 100%;
  background-color: $bg-color;
}

.info__toggle {
  position: fixed;
  top: 50%;
  right: 30px;
  transform-origin: top right;
  transform: rotate(270deg) translateX(50%);
  z-index: 105;

  & .info__toggle-icon {
    right: -10px;
    top: -5px;
    position: absolute;
    width: 30px;
    height: 30px;
    // background: center / contain url('~assets/img/icon/conversation.png')
    //   no-repeat;
    > img {
      width: 100%;
      transform: rotate(90deg);
    }
  }

  & .info__button {
    border: 0 solid #000;
    width: 150px;
    padding: 8px 8px;
    display: inline-block;
    margin: 0;
    color: #eee;
    text-transform: uppercase;
    font-size: 0.8em;
    outline: none;
    outline-offset: 0;

    &.contact {
      border: 1px solid #48494b;
      border-radius: 10px 10px 0 0;
      background: #3c3f42;
      transition: all ease-in-out 0.2s;
    }
    // &.form-modal {
    //   border-radius: 0px 8px 0px 0px;
    //   background: #3c3f42;
    // }
    &:hover,
    :focus {
      cursor: pointer;
      color: $blue;
    }

    & :active {
      cursor: pointer;
    }
  }
}

// Анимация появления блока info

.info-enter-active {
  // продолжительность появления
  transition: all 0.3s ease;
}

.info-leave-active {
  // продолжительность исчезновения
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.info-enter,
.info-leave-to {
  transform: translateX(100vw);
}

.info-enter-to {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  // transform: translateX(0vw);
}

.info-leave-to {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
}

// Анимация появления блока кнопок вызова инфо

// .toggle-enter-active {
//   // продолжительность появления
//   transition: all 0.3s ease;
// }
// .toggle-leave-active {
//   // продолжительность исчезновения
//   transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .toggle-enter,
// .toggle-leave-to {
//   transform: translateX(100vw);
// }
// .toggle-enter-to {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;

//   z-index: 1000;
//   // transform: translateX(0vw);
// }
// .toggle-leave-to {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: 1000;
// }
</style>
