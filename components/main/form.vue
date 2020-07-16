<template>
  <div class="form-small">
    <div class="wrapper">
      <form @submit.prevent="onSubmit" class="form-small__group">
        <input
          :class="{ 'form-group--error': $v.contactForm.name.$error }"
          v-model.trim.lazy="$v.contactForm.name.$model"
          class="input"
          type="text"
          name="name"
          placeholder="Ваше имя"
        />
        <p v-if="!$v.contactForm.name.required" class="error">
          Обязательное поле
        </p>

        <the-mask
          :class="{ 'form-group--error': $v.contactForm.phone.$error }"
          v-model.trim.lazy="$v.contactForm.phone.$model"
          :mask="['#(###) ###-####']"
          class="input"
          type="tel"
          name="phone"
          placeholder="Ваш номер для связи"
        />

        <p v-if="!$v.contactForm.phone.required" class="error">
          Обязательное поле
        </p>
        <textarea
          v-model.trim.lazy="contactForm.text"
          class="textarea textarea-active"
          type="text"
          name="phone"
          placeholder="Если у вас есть вопрос, впишите его сюда"
        />

        <div class="agreement__wrapper">
          <input
            id="check"
            v-model="checked"
            class="agreement__check"
            type="checkbox"
          />
          <label for="check" class="agreement">
            Нажимая кнопку вы соглашаетесь с нашей
            <a class="link-text" href="/docs/agreement">политикой</a>
          </label>
        </div>
        <div class="button__wrapper">
          <input
            :disabled="submitStatus === 'PENDING' || !checked"
            class="button button__left"
            type="submit"
            value="Отправить"
          /><button
            @click.prevent="$router.push('/contact')"
            class="button button__right"
          >
            Полная форма
          </button>
        </div>
        <transition name="status">
          <div v-if="submitStatus === 'OK'" class="status ok">
            <div class="ok_title">
              <h3>Спасибо за заявку!</h3>
              <p>Мы свяжемся с вами в течении 20 минут</p>
            </div>
          </div>
        </transition>
        <transition name="status"
          ><div v-if="submitStatus === 'PENDING'" class="status pending">
            <app-loading />
          </div>
        </transition>

        <p v-if="submitStatus === 'ERROR'" class="status-error">
          Пожалуйста, заполните обязательные поля
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import appLoading from './loading'
import { required } from 'vuelidate/lib/validators'

// import { TheMask } from 'vue-the-mask'

export default {
  components: {
    appLoading

    // TheMask
  },
  data() {
    return {
      test: '',
      contactForm: {
        name: '',
        phone: '',
        text: '',
        method: 'Телефонный звонок',
        email: 'Не нужно',
        page: 'small'
      },

      submitStatus: null,
      checked: true
    }
  },
  validations: {
    contactForm: {
      name: {
        required
      },
      phone: {
        required
      }
    }
  },
  computed: {
    disable() {
      return this.checked
    },
    value() {
      return this.contactForm.phone
    }
  },

  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()

  //     setTimeout(() => this.$nuxt.$loading.finish(), 500)
  //   })

  // },
  methods: {
    async onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        try {
          this.contactForm.phone = this.contactForm.phone.replace(/[^+\d]/g, '')
          const formData = {
            name: this.contactForm.name,
            phone: this.contactForm.phone,
            phone1: this.contactForm.phone1,
            email: this.contactForm.email,
            method: this.contactForm.method,
            text: this.contactForm.text,
            page: this.contactForm.page
          }

          // await console.log(formData.phone)

          await this.$store.dispatch('applications/create', formData)
          await this.$store.dispatch('applications/sendBotTelegram', formData)

          this.submitStatus = 'PENDING'
          this.submitStatus = 'OK'
          setTimeout(
            function() {
              this.submitStatus = null
            }.bind(this),
            4000
          )
          this.$v.$reset()

          this.contactForm.name = ''
          this.contactForm.phone = ''
          this.contactForm.email = ''
          this.contactForm.method = ''
          this.contactForm.text = ''
          this.contactForm.page = ''
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.status {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: $bg-color;
  opacity: 1;
  transition: all ease 1s;

  &-error {
    display: block;
    color: #f57f6c;
    padding: 0;
    padding-top: 15px;
    margin: 0 auto;
  }
}

.button {
  &__wrapper {
    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  }

  &__left {
    border-radius: 8px 0 0 8px;
    border-right: none;
    box-shadow: -8px -8px 20px #494c52, 1px 8px 30px #101316,
      -1px -1px 60px rgba(33, 39, 44, 0.01);
    transition: all ease-in-out 0.2s;

    &:hover,
    :focus {
      color: $green;
    }

    &:active {
      box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
        inset -5px -5px 10px rgb(100, 100, 100);
      transition: box-shadow ease-in-out 0.2s;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      border-radius: 8px 8px 8px 8px;
      margin-bottom: 18px;
      width: 80%;
    }
  }

  &__right {
    border-radius: 0 8px 8px 0;
    box-shadow: -1px -8px 20px #494c52, 8px 8px 30px #101316,
      -1px -1px 60px rgba(33, 39, 44, 0.01);
    transition: all ease-in-out 0.2s;

    &:hover,
    :focus {
      color: $blue;
    }

    &:active {
      box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
        inset -5px -5px 10px rgb(100, 100, 100);
      transition: box-shadow ease-in-out 0.2s;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      border-radius: 8px 8px 8px 8px;
      width: 80%;
    }
  }
}

.form-social {
  & .status {
    background-color: #eee;
  }

  & .ok_title {
    color: $grey;
  }

  & .button {
    background: rgb(219, 219, 219);
    border: 1px solid white;

    &__left {
      // background: linear-gradient(90deg, #d6d6d6 -50%, rgb(255, 255, 255) 120%);

      border-right: none;
      box-shadow: -12px -12px 20px white, 1px 5px 30px rgba(0, 0, 0, 0.274);
      transition: all ease-in-out 0.2s;

      &:hover,
      :focus {
        color: $green;
      }

      &:active {
        box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
          inset -6px -6px 10px #fff;
        transition: box-shadow ease-in-out 0.2s;
      }
    }

    &__right {
      // background: linear-gradient(90deg, rgb(255, 255, 255) -20%, #d6d6d6 150%);

      box-shadow: -1px -12px 20px white, 5px 5px 30px rgba(0, 0, 0, 0.274);
      transition: all ease-in-out 0.2s;

      &:hover,
      :focus {
        color: $blue;
      }

      &:active {
        box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
          inset -6px -6px 10px #fff;
        transition: box-shadow ease-in-out 0.2s;
      }
    }
  }
}
</style>
