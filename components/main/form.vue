<template>
  <div class="form-small">
    <div class="wrapper">
      <form @submit.prevent="onSubmit" class="form-small__group">
        <input
          :class="{ 'form-group--error': $v.contactForm.name.$error }"
          v-model.trim="$v.contactForm.name.$model"
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
          v-model.trim="$v.contactForm.phone.$model"
          class="input"
          type="tel"
          name="phone"
          placeholder="Ваш номер для связи"
        />
        <p v-if="!$v.contactForm.phone.required" class="error">
          Обязательное поле
        </p>
        <textarea
          v-model.trim="contactForm.text"
          class="textarea"
          type="text"
          name="phone"
          placeholder="Если у вас есть вопрос, впишите его сюда"
        />
        <div>
          <input
            :disabled="submitStatus === 'PENDING'"
            class="button"
            type="submit"
            value="Отправить"
          />

          <p v-if="submitStatus === 'OK'" class="typo__p">
            <!-- Thanks for your submission! -->
            Спасибо за заявку!
          </p>
          <p v-if="submitStatus === 'ERROR'" class="typo__p">
            Пожалуйста, заполните форму правильно
          </p>
          <p v-if="submitStatus === 'PENDING'" class="typo__p">Отправка...</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'
export default {
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

      submitStatus: null
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

          this.submitStatus = 'OK'
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

<style></style>
