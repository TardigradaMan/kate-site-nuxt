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

        <input
          :class="{ 'form-group--error': $v.contactForm.phone.$error }"
          v-model.trim.lazy="$v.contactForm.phone.$model"
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
          class="textarea"
          type="text"
          name="phone"
          placeholder="Если у вас есть вопрос, впишите его сюда"
        />
        <input
          id="check"
          v-model="checked"
          class="agreement__check"
          type="checkbox"
        />
        <label for="check" class="agreement">
          Нажимая кнопку вы соглашаетесь с нашей&nbsp;
          <a class="link-text" href="/docs/agreement">политикой</a>
        </label>

        <input
          :disabled="submitStatus === 'PENDING' || !checked"
          class="button"
          type="submit"
          value="Отправить"
        />
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
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  components: {
    appLoading
  },
  data() {
    return {
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
        required,
        numeric
      }
    }
  },
  computed: {
    disable() {
      return this.checked
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
          const formData = {
            name: this.contactForm.name,
            phone: this.contactForm.phone,
            email: this.contactForm.email,
            method: this.contactForm.method,
            text: this.contactForm.text,
            page: this.contactForm.page
          }

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
  },
  sendClass() {
    console.log('Зупастил sendClass')

    this.submitStatus = null
  }
}
</script>
<style lang="scss" scoped>
.status {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: $bg-color;
  opacity: 0;
  transition: all ease 1s;
  & {
    opacity: 1;
    transition: all ease 1s;
  }
  &-error {
    display: block;
    color: #f57f6c;
    padding: 0;
    padding-top: 15px;
    margin: 0 auto;
  }
}
</style>
