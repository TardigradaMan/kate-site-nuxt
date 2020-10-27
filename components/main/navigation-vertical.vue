<template>
  <div class="main-nav__wrapper">
    <nav class="main-nav">
      <ul ref="nav" class="main-nav__list">
        <li class="main-nav__item">
          <nuxt-link class="main-nav__link" to="/">Главная</nuxt-link>
        </li>
        <li class="main-nav__item">
          <nuxt-link class="main-nav__link" to="/social"
            >Социальная сеть</nuxt-link
          >
          <!-- <span class="main-nav__link--active">Социальная сеть</span> -->
        </li>
        <li class="main-nav__item">
          <nuxt-link class="main-nav__link" to="/advertising"
            >Реклама в интернете</nuxt-link
          >
        </li>
        <li class="main-nav__item">
          <nuxt-link class="main-nav__link" to="/webdevelopment"
            >Разработка landing page</nuxt-link
          >
        </li>
        <li class="main-nav__item">
          <nuxt-link class="main-nav__link" to="/contact"
            >Форма обратной связи</nuxt-link
          >
        </li>
        <li class="main-nav__item">
          <nuxt-link class="main-nav__link" to="/docs/agreement"
            >Политика конфиденциальности</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },

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
  position: relative;
  width: 100%;
  height: 100%;

  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // z-index: 100;
    background: rgba(25, 25, 25, 0.9);
    transition: all 0.4s ease 0s;
    text-align: center;
  }
}

.main-nav__list {
  // display: flex;
  // flex-flow: column wrap;

  // padding: 0;
  // margin: 0;
  // list-style: none;
  // justify-content: center;
  // align-items: left;
  transform: translate(0, -50%);
  position: absolute;
  top: calc(50% - 0px);
  left: 0;
  right: 0;
  margin: auto;
  padding: 0;
}

.main-nav__item {
  padding: 20px;
  animation: 0.3s ease 0s both link;
}

@keyframes link {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@for $i from 1 through 6 {
  .main-nav__item {
    // :nth-child(1-6)
    &:nth-child(#{$i}) {
      // Delay the animation. Delay increases as items loop.
      animation-delay: $i * (0.03s);
    }
  }
}

.main-nav__item:last-child {
  margin-right: 0;
}

// .main-nav__link--active {
//   color: $grey;
//   position: fixed;
//   font-size: 100px;
//   opacity: 0;
//   top: 50%;
//   left: 50%;
//   transform: translateX(-50%);
//   text-transform: uppercase;
//   font-weight: 700;
//   z-index: -1;
// }

.main-nav__link {
  font-size: 26px;
  line-height: 28px;
  // text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  position: relative;

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

  &:hover,
  :active {
    &::before {
      transform: translate(-40px, 0);
      opacity: 1;
      transition: all 0.4s ease 0s;
    }

    &::after {
      transform: translate(10px, 0);
      opacity: 1;
      transition: all 0.4s ease 0s;
    }
  }
}

// .no-touchevents .main-nav__link {
//   &:hover,
//   :active {
//     &::before {
//       transform: translate(-40px, 0);
//       opacity: 1;
//       transition: all 0.4s ease 0s;
//     }

//     &::after {
//       transform: translate(10px, 0);
//       opacity: 1;
//       transition: all 0.4s ease 0s;
//     }
//   }
// }

.main-nav__toggle {
  display: none;
}

.nuxt-link-exact-active {
  &::before {
    transform: translate(-40px, 0);
    opacity: 1;
  }

  &::after {
    transform: translate(10px, 0);
    opacity: 1;
  }
}
</style>
