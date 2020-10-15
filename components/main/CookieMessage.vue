<template>
  <div v-if="isOpen" class="cookie">
    <div>
      <div>
        <div class="cookie__message">
          <slot name="message">
            Мы используем файлы cookie для предоставления наших услуг, а также
            для аналитики и маркетингa. Чтобы узнать больше об использовании
            файлов cookie, см.
            <nuxt-link class="cookie__link" to="/docs/agreement"
              >Политика конфиденциальности.</nuxt-link
            >
            Нажмите кнопку «Принять», чтобы улучшить работу пользователей в
            нашем приложении.
          </slot>
        </div>
        <div class="cookie__button">
          <button @click="accept" class="button cookie__button--aceept">
            {{ buttonTextAccept }}
          </button>
          <button @click="deny" class="button cookie__button--deny">
            {{ buttonTextDeny }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Принять'
    },
    buttonTextDeny: {
      type: String,
      default: 'Отменить'
    },
    message: {
      type: String,
      default:
        ' Мы используем файлы cookie для предоставления наших услуг, а такжe для аналитики и маркетингa. Чтобы узнать больше об использовании файлов cookie'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    /*  if (!this.getGDPR() === true) {
      this.isOpen = true;
    } */
    if (this.getGDPR() === 'false' || null) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', true)
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie {
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 50px;
  width: 400px;
  padding: 15px;
  background: $grey;
  color: #fff;
  border-radius: 5px;
  box-shadow: $shadow-block;
  font-size: 14px;

  &__link {
    color: $blue;
    text-decoration: underline;
    transition: all 0.25s;

    &:hover {
      text-decoration: none;
    }
  }

  &__button {
    padding-top: 10px;

    &--aceept,
    &--deny {
      width: 100px;
      font-size: 14px;
      padding: 0.5em;
      border-radius: 8px;
      border-right: none;
      box-shadow: -8px -8px 20px #3d3e3f, 1px 8px 30px #101316,
        -1px -1px 60px rgba(33, 39, 44, 0.01);
      transition: all ease-in-out 0.2s;

      &:hover {
        color: $green;
      }

      &:active {
        box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
          inset -5px -5px 10px rgb(100, 100, 100);
        transition: box-shadow ease-in-out 0.2s;
      }
    }
  }
}
</style>
