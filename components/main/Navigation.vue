<template>
  <nav class="main-nav">
    <ul ref="nav" v-show="showMenu" class="main-nav__list">
      <li class="main-nav__item">
        <nuxt-link active-class="active" class="main-nav__link" to="/"
          >Home page</nuxt-link
        >
      </li>
      <li class="main-nav__item">
        <nuxt-link class="main-nav__link" to="/social"
          >Ведение соц групп</nuxt-link
        >
      </li>
      <li class="main-nav__item">
        <nuxt-link class="main-nav__link" to="/webdevelopment">Сайт</nuxt-link>
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
    <span ref="svg" @click="openNav" class="main-nav__toggle ">
      <svg
        id="b03d9740-5f67-4a92-974e-4a3fb427267a"
        class="main-nav__menu-burger"
        width="20"
        height="20"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300.5 199.2"
      >
        <title>Menu_icon_open</title>
        <path
          d="M388.3,201.9h-196c-9.9,0-17.9-9-17.9-20s8-20,17.9-20h196c9.9,0,17.9,9,17.9,20S398.2,201.9,388.3,201.9Z"
          transform="translate(-105.7 -156.4)"
          fill="#231f20"
        />
        <circle cx="25.5" cy="25.5" r="25.5" fill="#231f20" />
        <path
          d="M388.3,276h-196c-9.9,0-17.9-9-17.9-20s8-20,17.9-20h196c9.9,0,17.9,9,17.9,20S398.2,276,388.3,276Z"
          transform="translate(-105.7 -156.4)"
          fill="#231f20"
        />
        <circle cx="25.5" cy="99.6" r="25.5" fill="#231f20" />
        <path
          d="M388.3,350.1h-196c-9.9,0-17.9-9-17.9-20s8-20,17.9-20h196c9.9,0,17.9,9,17.9,20S398.2,350.1,388.3,350.1Z"
          transform="translate(-105.7 -156.4)"
          fill="#231f20"
        />
        <circle cx="25.5" cy="173.7" r="25.5" fill="#231f20" />
      </svg>
    </span>
    <span
      ref="svgClose"
      @click="openNav"
      class="main-nav__toggle main-nav__toggle--close"
    >
      <svg
        id="e3954a0a-f96c-46de-9cd5-c7c02f90c09a"
        class="main-nav__menu-burger"
        width="20"
        height="20"
        data-name="Слой 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>Menu_icon_close</title>
        <g id="b5b9d87d-907d-4a7e-95e3-20f7da98dda7" data-name="Layer 2">
          <g id="be462fc3-bcf7-46c6-8692-5ecf10cc5cdb" data-name="close">
            <g id="f9e5261e-e5d9-433c-9e22-90656a19c5b0" data-name="close-2">
              <rect width="24" height="24" fill="#fff" fill-opacity="0" />
              <path
                d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0h0L12,13.41l4.29,4.3a1,1,0,0,0,1.41,0h0a1,1,0,0,0,0-1.41h0Z"
                transform="translate(0 0)"
                fill="#231f20"
              />
            </g>
          </g>
        </g>
      </svg>
    </span>
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
    openNav() {
      const nav = this.$refs.nav.classList
      const svg = this.$refs.svg.classList
      const svgClose = this.$refs.svgClose.classList

      nav.contains('open') ? nav.remove('open') : nav.add('open')

      svg.contains('main-nav__toggle--open')
        ? svg.remove('main-nav__toggle--open')
        : svg.add('main-nav__toggle--open')

      svgClose.contains('main-nav__toggle--close')
        ? svgClose.remove('main-nav__toggle--close')
        : svgClose.add('main-nav__toggle--close')
    },
    closeNav() {}
  }
}
</script>
<style lang="scss" scoped>
.main-nav {
  margin: 0 auto;
}

.main-nav__list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
}

.main-nav__item {
  margin-right: 50px;
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
    background-repeat: no-repeat;
    background-position: center bottom 1px;
    background-size: 100% 2px;
    background-image: linear-gradient(90deg, #f27a54 0%, #a154f2 186.42%);
  }
}

.nuxt-link-exact-active {
  background-repeat: no-repeat;
  background-position: center bottom 1px;
  background-size: 100% 2px;
  background-image: linear-gradient(90deg, #f27a54 0%, #a154f2 186.42%);
}

.main-nav__toggle {
  display: none;
}
@media screen and (max-width: $mobile-width) {
  .main-nav__list {
    display: none;
  }
  .open {
    width: 300px;
    flex-direction: column;
    display: block;
    align-items: flex-start;
    padding: 10px 0 10px 15px;
    .main-nav__item {
      margin-bottom: 15px;
    }
  }
  .main-nav__toggle {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .main-nav__toggle--open {
    display: none;
  }
  .main-nav__toggle--close {
    display: none;
  }
}
</style>
