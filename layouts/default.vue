<template>
  <div>
    <!-- <header :class="{ header__scroll: scrolled }" class="header">
      <div class="wrapper__nav">
        <app-navigation></app-navigation>
      </div>
    </header> -->

    <header class="header">
      <!-- <div class="header__test">ЛОГО</div> -->
      <!-- <button v-if="!showNav" @click="showMenu" class="btn">
        Меню
      </button> -->
      <span v-if="!showNav" @click="showMenu" class="btn header_icon">
        <svg
          id="test"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="35px"
          height="35px"
          viewBox="0 0 512 512"
        >
          <g id="start">
            <path
              fill="#AF16EF"
              d="M207,249.2H100.2c-19.5,0-35.3-15.9-35.3-35.3V107c0-19.5,15.9-35.3,35.3-35.3H207
		c19.5,0,35.3,15.9,35.3,35.3v106.8C242.3,233.3,226.5,249.2,207,249.2z M100.2,99c-4.4,0-8,3.6-8,8v106.8c0,4.4,3.6,8,8,8H207
		c4.4,0,8-3.6,8-8V107c0-4.4-3.6-8-8-8L100.2,99z"
            />
            <path
              d="M411.8,249.2H305c-19.5,0-35.3-15.9-35.3-35.3V107c0-19.5,15.9-35.3,35.3-35.3h106.8c19.5,0,35.3,15.9,35.3,35.3v106.8
		C447.1,233.3,431.3,249.2,411.8,249.2z M305,99c-4.4,0-8,3.6-8,8v106.8c0,4.4,3.6,8,8,8h106.8c4.4,0,8-3.6,8-8V107c0-4.4-3.6-8-8-8
		L305,99z"
            />
            <path
              d="M207,440.3H100.2c-19.5,0-35.3-15.9-35.3-35.3V298.2c0-19.5,15.9-35.3,35.3-35.3H207c19.5,0,35.3,15.9,35.3,35.3V405
		C242.3,424.5,226.5,440.3,207,440.3z M100.2,290.1c-4.4,0-8,3.6-8,8V405c0,4.4,3.6,8,8,8H207c4.4,0,8-3.6,8-8V298.2
		c0-4.4-3.6-8-8-8H100.2z"
            />
            <path
              d="M411.8,440.3H305c-19.5,0-35.3-15.9-35.3-35.3V298.2c0-19.5,15.9-35.3,35.3-35.3h106.8c19.5,0,35.3,15.9,35.3,35.3V405
		C447.1,424.5,431.3,440.3,411.8,440.3z M305,290.1c-4.4,0-8,3.6-8,8V405c0,4.4,3.6,8,8,8h106.8c4.4,0,8-3.6,8-8V298.2
		c0-4.4-3.6-8-8-8H305z"
            />
          </g>
        </svg>
      </span>

      <transition name="fade">
        <nav-vertical @close="showMenu" v-if="showNav"></nav-vertical>
      </transition>
    </header>
    <main class="main">
      <p class="hidden">Реклама в интернете</p>
      <div class="wrapper"><nuxt /></div>
    </main>
    <app-footer></app-footer>
  </div>
</template>
//
<script>
// import AppNavigation from '@/components/main/Navigation'
import AppFooter from '@/components/main/Footer'
import NavVertical from '@/components/main/navigation-vertical'

export default {
  components: {
    // AppNavigation,
    AppFooter,
    NavVertical
  },

  data() {
    return {
      scrolled: false,
      showNav: false
    }
  },
  watch: {
    $route() {
      this.showNav = !this.showNav
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
.header_icon {
  position: absolute;
  cursor: pointer;
  z-index: 1000;
}

.header {
  position: relative;

  height: 35px;
  background-color: rgb(75, 73, 73);
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}

main {
  width: 100%;
  margin: 0 auto;

  // background-image: $bg-img-default;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;

  background-color: $bg-color;
}
</style>
