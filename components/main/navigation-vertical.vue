<template>
  <nav class="main-nav">
    <ul ref="nav" v-show="showMenu" class="main-nav__list">
      <li class="main-nav__item">
        <nuxt-link active-class="active" class="main-nav__link" to="/"
          >Главная</nuxt-link
        >
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" to="/social">Ведение соц групп</a>
      </li>
      <li class="main-nav__item">
        <a class="main-nav__link" to="/advertising">Реклама</a>
      </li>
      <li class="main-nav__item">
        <nuxt-link class="main-nav__link" to="/contact"
          >Форма обратной связи</nuxt-link
        >
      </li>
      <li class="main-nav__item">
        <nuxt-link class="main-nav__link" to="/admin">Админ</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: true
    }
  },
  watch: {
    $route() {
      const nav = this.$refs.nav.classList
      nav.remove('open')
    }
  },

  methods: {
    openNav() {},
    closeNav() {}
  }
}
</script>
<style lang="scss" scoped>
.main-nav {
  position: fixed;
  top: 0;
  left: -15px;

  margin-top: 40vh;
}

.main-nav__list {
  display: flex;
  flex-flow: column wrap;

  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: center;
  align-items: left;
}

.main-nav__item {
  margin-bottom: 10px;
  padding: 5px 0 5px 25px;

  transform: rotate(-18deg);
  border-radius: 5px;

  background-color: rgb(70, 70, 78);
}

.main-nav__item:last-child {
  margin-right: 0px;
}

.main-nav__link {
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  padding-bottom: 10px;
  &:hover,
  :focus,
  :active {
    color: #a154f2;
  }
}

.nuxt-link-exact-active {
  background-repeat: no-repeat;
  background-position: center bottom 1px;
  background-size: 100% 2px;
  color: #f27a54;
  // background-image: linear-gradient(90deg, #f27a54 0%, #a154f2 186.42%);
}

.main-nav__toggle {
  display: none;
}
</style>
