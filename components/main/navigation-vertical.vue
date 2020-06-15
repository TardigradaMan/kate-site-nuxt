<template>
  <div class="main-nav__wrapper">
    <nav class="main-nav">
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
          <nuxt-link class="main-nav__link" to="/price">Цены</nuxt-link>
        </li>
        <li class="main-nav__item">
          <nuxt-link class="main-nav__link" to="/admin">Админ</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
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
  text-align: center;
  width: 100%;

  height: 100vh;
  padding-top: 50px;
  box-shadow: 5px 0px 10px #000;
  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(25, 25, 25, 0.9);
    z-index: 100;
  }
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
  margin-bottom: 30px;
  animation: 0.3s ease 0s both link;
}

@keyframes link {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@for $i from 1 through 6 {
  .main-nav__item {
    // :nth-child(1-12)
    &:nth-child(#{$i}) {
      // Delay the animation. Delay increases as items loop.
      animation-delay: $i * (0.03s);
    }
  }
}

.main-nav__item:last-child {
  margin-right: 0px;
}

.main-nav__link {
  font-size: 26px;
  line-height: 26px;
  // text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #ffffff;
  position: relative;

  &:hover {
    &::before {
      transform: translate(-40px, 0px);
      opacity: 1;
      transition: all 0.4s ease 0s;
    }
    &::after {
      transform: translate(10px, 0px);
      opacity: 1;
      transition: all 0.4s ease 0s;
    }
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    height: 1px;
    width: 30px;
    background: white;
    opacity: 0;
    transition: all 0.4s ease 0s;
  }
  &::before {
    transform: translate(-60px, 0);
  }
  &::after {
    transform: translate(30px, 0);
  }
}

.nuxt-link-exact-active {
  &::before {
    transform: translate(-40px, 0px);
    opacity: 1;
  }
  &::after {
    transform: translate(10px, 0px);
    opacity: 1;
  }
}
.main-nav__toggle {
  display: none;
}
</style>
