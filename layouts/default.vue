<template>
  <div class="test">
    <header class="header">
      <div
        @click="showMenu"
        :class="{ toggle__open: showNav }"
        class="menu-toggle"
      >
        <span></span>
        <span></span>
        <span></span>
        <!-- <img src="~/assets/img/menu.png" alt="" /> -->
      </div>

      <transition name="fade">
        <nav-vertical @close="showMenu" v-if="showNav"></nav-vertical>
      </transition>
    </header>
    <main class="main">
      <nuxt />
    </main>
    <!-- <app-footer></app-footer> -->
  </div>
</template>
//
<script>
// import AppFooter from '@/components/main/Footer'
import NavVertical from '@/components/main/navigation-vertical'

export default {
  components: {
    // AppFooter,
    NavVertical
  },

  data() {
    return {
      showNav: false,
      scrolled: false
    }
  },
  watch: {
    $route() {
      if (this.showNav) {
        this.showNav = !this.showNav
      }
    }
  },

  mounted() {
    window.addEventListener(
      'scroll',
      event => (this.scrolled = window.scrollY > 30)
    )
  },
  destroyed() {
    window.removeEventListener(
      'scroll',
      event => (this.scrolled = window.scrollY > 30)
    )
  },
  methods: {
    showMenu() {
      this.showNav = !this.showNav
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
  z-index: 1000;
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
  cursor: pointer;
  &:hover span {
    transform: rotate3d(0, 1, 0.1, 180deg);
    transition: all 0.5s ease 0s;
  }
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
  &.toggle__open {
    span {
      position: absolute;
      top: 25%;
      left: 0;
      opacity: 0;
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
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

main {
  width: 100%;
  background-color: $bg-color;
}
</style>
