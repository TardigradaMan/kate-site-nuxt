<template>
  <div>
    <header :class="{ header__scroll: scrolled }" class="header">
      <div class="wrapper__nav">
        <app-navigation></app-navigation>
      </div>
    </header>
    <main class="main">
      <div class="wrapper"><nuxt /></div>
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppNavigation from '@/components/main/Navigation'
import AppFooter from '@/components/main/Footer'

export default {
  components: {
    AppNavigation,
    AppFooter
  },

  data() {
    return {
      scrolled: false
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
  }
}
</script>

<style lang="scss" scoped>
.wrapper__nav {
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
}
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.5s ease-in-out;
  background-color: #3c444c;
}
.header__scroll {
  background-color: #3c444c;
  transition: all 0.5s ease-in-out;
}

main {
  width: 100%;
  margin: 0 auto;
}
</style>
