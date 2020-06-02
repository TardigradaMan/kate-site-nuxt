<template>
  <nav class="main-nav">
    <span @click="closeNav" class="close"
      ><svg
        id="close"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="25px"
        height="25px"
        viewBox="0 0 41.756 41.756"
        style="enable-background:new 0 0 41.756 41.756;"
        xml:space="preserve"
      >
        <g>
          <path
            d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
		c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
		C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
		c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"
          />
        </g></svg
    ></span>
    <ul ref="nav" class="main-nav__list">
      <li class="main-nav__item">
        <nuxt-link active-class="active" class="main-nav__link" to="/"
          >Главная</nuxt-link
        >
      </li>
      <li class="main-nav__item">
        <nuxt-link class="main-nav__link" to="/social"
          >Ведение соц групп</nuxt-link
        >
      </li>
      <li class="main-nav__item">
        <nuxt-link class="main-nav__link" to="/ad">Реклама</nuxt-link>
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
  // props: {
  //   showMenu: {
  //     type: Boolean,
  //     required: true
  //   }
  // },
  data() {
    return {}
  },
  // watch: {
  //   $route() {
  //     // const nav = this.$refs.nav.classList
  //     // nav.remove('open')
  //     console.log('Переход')
  //   }
  // },

  methods: {
    openNav() {},
    closeNav() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.main-nav {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;

  height: 100vh;
  background: rgba(29, 29, 29, 0.9);
  padding-top: 15px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
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

  border-radius: 5px;
}

.main-nav__item:last-child {
  margin-right: 0px;
}

.main-nav__link {
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.15em;

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
