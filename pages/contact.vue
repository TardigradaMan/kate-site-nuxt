<template>
  <div class="wrapper">
    <h2 class="form-title">Заполните поля и мы сразу начнем</h2>

    <form @submit.prevent="onSubmit" novalidate class="form">
      <div class="form__group contact">
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
        <input
          :class="{ 'form-group--error': $v.contactForm.email.$error }"
          v-model.trim.lazy="$v.contactForm.email.$model"
          class="input"
          type="email"
          name="email"
          placeholder="Ваш email для связи"
        />
        <p v-if="!$v.contactForm.email.required" class="error">
          Обязательное поле
        </p>
        <p v-if="!$v.contactForm.email.email" class="error">
          Введите корректный адрес почты (Например доступная@реклама.всем)
        </p>
      </div>

      <div class="form__group radio">
        <h3 class="form__title">Предпочитаемый способ связи <br /></h3>
        <div class="radio__wrapper">
          <label for="all"
            ><input
              id="all"
              v-bind:value="communicationMethod.all"
              v-model="contactForm.method"
              type="radio"
            />Любым способом</label
          >

          <label for="phone">
            <input
              id="phone"
              v-bind:value="communicationMethod.phone"
              v-model="contactForm.method"
              type="radio"
            />Телефонный звонок</label
          >

          <label for="email"
            ><input
              id="email"
              v-bind:value="communicationMethod.email"
              v-model="contactForm.method"
              type="radio"
            />Электронная почта</label
          >

          <label for="message">
            <input
              id="message"
              v-bind:value="communicationMethod.messagingApps"
              v-model="contactForm.method"
              type="radio"
            />Whatsapp/Telegram</label
          >
        </div>
      </div>
      <div class="form__group check">
        <h3 class="form__title">Мне нужно:</h3>
        <div class="checkbox__wrapper">
          <label class="check__label">
            <input
              v-bind:value="typeOfService.add"
              v-model="service"
              type="checkbox"
              class="check__input"
            />
            <span class="check__box"></span>
            Увеличить продажи моего товара</label
          >

          <label class="check__label">
            <input
              v-model="service"
              v-bind:value="typeOfService.social"
              class="check__input"
              type="checkbox"
            />
            <span class="check__box"></span>
            Создать или улучшить группу в социальных сетях</label
          >
          <label class="check__label">
            <input
              v-bind:value="typeOfService.web"
              v-model="service"
              type="checkbox"
              class="check__input"
            />
            <span class="check__box"></span>
            Разработать веб-приложение или статический сайт</label
          >
        </div>
      </div>
      <div class="form__group block">
        <h3 class="form__title">Ещё немного вводных данных</h3>

        <template v-if="add">
          <transition name="additional">
            <input
              :class="{ 'form-group--error': $v.contactForm.urlAdd.$error }"
              v-model.trim.lazy="$v.contactForm.urlAdd.$model"
              class="input"
              type="text"
              placeholder="Ссылка на ваш товар/услугу"
            />
          </transition>
          <p v-if="!$v.contactForm.urlAdd.url" class="error">
            Введите корректный адрес (Например: https://доступная-реклама.всем/)
          </p>
        </template>

        <transition name="additional">
          <template v-if="social">
            <input
              v-model="contactForm.urlSocial"
              class="input"
              type="text"
              placeholder="Ссылка на вашу группу(если имеется конечно)"
            />
          </template>
        </transition>
        <transition name="additional">
          <template v-if="web">
            <input
              v-model="contactForm.urlWeb"
              class="input"
              type="text"
              placeholder="Возможно у вас есть ссылка на пример"
            />
          </template>
        </transition>
      </div>
      <div class="form__group form__status">
        <transition name="status">
          <div v-if="submitStatus === 'OK'" class="status status__ok--home">
            <div>
              <h3>Спасибо за заявку!</h3>
              <p>Мы свяжемся с вами в течении 20 минут</p>
            </div>
          </div>
        </transition>
        <transition name="status">
          <div v-if="submitStatus === 'PENDING'" class="status status__pending">
            <app-horizontal />
          </div>
        </transition>
        <transition name="status">
          <p v-if="submitStatus === 'ERROR'" class="status status__error">
            Пожалуйста, заполните обязательные поля
          </p>
        </transition>
      </div>
      <div class="form__group form__button">
        <input
          :disabled="submitStatus === 'PENDING'"
          class="button"
          type="submit"
          value="Отправить"
        />
      </div>
    </form>
  </div>
</template>
<script>
import AppHorizontal from '../components/main/LoadingHorizontal'
import { required, email, url } from 'vuelidate/lib/validators'

export default {
  head: {
    title: 'Подробная заявка'
  },
  components: {
    AppHorizontal
  },
  data() {
    return {
      contactForm: {
        name: '',
        phone: '',
        email: '',
        method: 'Любым способом',
        urlAdd: '',
        urlSocial: '',
        urlWeb: '',
        page: 'home'
      },
      communicationMethod: {
        phone: 'Связаться с помощью телефона',
        email: 'Связаться с помощью электронной почты',
        messagingApps: 'Через whatsapp или telegram',
        all: 'Любым способом'
      },
      typeOfService: {
        add: 'add',
        social: 'social',
        web: 'web'
      },
      service: [],

      submitStatus: null
    }
  },
  validations: {
    contactForm: {
      name: {
        required
      },
      phone: {
        required
      },
      email: {
        required,
        email
      },
      urlAdd: {
        url
      }
    }
  },
  computed: {
    add() {
      return this.service.includes('add')
    },

    social() {
      return this.service.includes('social')
    },

    web() {
      return this.service.includes('web')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      this.$nuxt.$loading.finish()
    })
  },
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
            urlAdd: this.contactForm.urlAdd,
            urlSocial: this.contactForm.urlSocial,
            urlWeb: this.contactForm.urlWeb,
            page: this.contactForm.page
          }

          await console.log(formData.name)

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
          this.contactForm.method = 'Любым способом'
          this.contactForm.urlAdd = ''
          this.contactForm.urlSocial = ''
          this.contactForm.urlWeb = ''
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
.form-title {
  font-weight: bold;
  font-size: 2em;
  line-height: 22px;
  text-align: center;
  margin: 0;
  padding-top: 40px;

  @media (max-width: $md-width-max) {
    // CSS для ширины от 768px до 991px */
    font-size: 2em;
  }

  @media (max-width: $sm-width-max) {
    // CSS для ширины от 576px до 767px */
    font-size: 1.8em;
  }

  @media (max-width: $xs-width-max) {
    // CSS для ширины до 575px (включительно) */
    width: 250px;
    margin: 0 auto;
    font-size: 1.5em;
  }
}

.form {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-template-areas:
    'input radio'
    'check block'
    'status button';

  // grid-template-rows: 1fr 370px;
  // grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 50px 0;

  @media (max-width: $lg-width-max) {
    // CSS для ширины от 992px до 1199px */
  }

  @media (max-width: $md-width-max) {
    // CSS для ширины от 768px до 991px */
  }

  @media (max-width: $sm-width-max) {
    // CSS для ширины от 576px до 767px */
    grid-template: 1fr 370px / 1fr;
    grid-template-areas:
      'input'
      'radio'
      'check'
      'block'
      'status'
      'button';

    //   grid-template-rows: 1fr;
    //   grid-template-columns: 1fr;
    //   grid-gap: 1vw;
  }

  @media (max-width: $xs-width-max) {
    // CSS для ширины до 575px (включительно) */
    // grid-template-areas:
    //   'input'
    //   'radio'
    //   'check'
    //   'block';

    // grid-template-rows: 1fr;
    // grid-template-columns: 1fr;
    // grid-gap: 1vw;
  }
}

.form__group {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 40px;
  padding-bottom: 0;
  // box-shadow: $shadow-out;
  box-shadow: $shadow-nm1;
  border-radius: 5px;
}

.form__title {
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
}

.contact {
  grid-area: input;
}

.radio {
  grid-area: radio;
  // padding-top: 0;

  & input {
    appearance: none;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    border: 10px solid rgb(245, 245, 245);
    transition: all 0.1s ease-in-out;
    outline: none;
    margin-right: 10px;
    position: relative;
    top: 4px;

    &:checked {
      border: 5px solid rgb(245, 245, 245);
    }
  }

  & label {
    cursor: pointer;
    margin-bottom: 30px;
    color: #cbcfd4;
  }
}

.radio__wrapper {
  display: flex;
  flex-flow: column wrap;
}

.check {
  grid-area: check;
}

.checkbox__wrapper {
  display: flex;
  flex-flow: column wrap;
  padding-left: 30px;
}

.check__label {
  position: relative;
  padding-left: 3em;
  cursor: pointer;
  margin-bottom: 40px;
  color: #cbcfd4;
}

.check__input {
  appearance: none;
  position: absolute;
}

.check__box {
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  // background: #747d88;
  // border: #3d3d3d solid 1px;
  box-shadow: $shadowNB-into;
  margin-left: -3em;
  transition: 0.3s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background: linear-gradient(145deg, #e6e6e6, #fff);
    transition: all 0.3s ease-out;
  }
}

.check__input:checked + .check__box {
  transition: 0.3s ease-out;
  background: #0d7937;
  // border: #494d4b solid 1px;

  &::before {
    background: linear-gradient(145deg, rgb(211, 211, 211), #fff);
    transition: all 0.3s ease-out;
    transform: translateX(20px);
  }
}

.block {
  grid-area: block;
  background-repeat: no-repeat;
  background-size: cover;
}

.additional-enter-active {
  transition: all 0.2s ease;
}

.additional-leave-active {
  transition: all 0.2s ease;
}

.additional-enter,
.additional-leave-to {
  opacity: 0;
}

.form__button {
  grid-area: button;
  padding-bottom: 40px;
}

.form__status {
  grid-area: status;
  padding: 25px 0;
  display: block;
  // align-self: center;
}

.status {
  padding: 0;
  position: relative;
  text-align: center;

  &__pending {
    padding: 25px 0;
  }

  &__error {
    text-align: center;
    color: #f57f6c;
    font-size: 18px;
    margin: 0;
    // vertical-align: center;
  }

  // &__ok {
  //   &--home {
  //   }
  // }
}

.ok_title {
  h3 {
    font-size: 24px;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }
}

.button {
  width: 290px;
  border-radius: 8px;
  box-shadow: -1px -8px 20px #494c52, 8px 8px 30px #101316,
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
}
</style>
