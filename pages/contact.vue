<template>
  <div class="wrapper__contact">
    <h2>Заполните поля и мы сразу начнем</h2>

    <form @submit.prevent="onSubmit" class="form">
      <div class="form__group contact">
        <input
          :class="{ 'form-group--error': $v.contactForm.name.$error }"
          v-model.trim="$v.contactForm.name.$model"
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
          type="tel"
          name="phone"
          placeholder="Ваш номер для связи"
        />
        <p v-if="!$v.contactForm.phone.required" class="error">
          Обязательное поле
        </p>
        <input
          :class="{ 'form-group--error': $v.contactForm.email.$error }"
          v-model.trim="$v.contactForm.email.$model"
          type="email"
          name="email"
          placeholder="Ваш email для связи"
        />
        <p v-if="!$v.contactForm.email.required" class="error">
          Обязательное поле
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
        <template v-if="getService('add')">
          <input
            :class="{ 'form-group--error': $v.contactForm.urlAdd.$error }"
            v-model="$v.contactForm.urlAdd.$model"
            type="text"
            placeholder="Ссылка на ваш товар/услугу"
          />
          <p v-if="!$v.contactForm.urlAdd.url" class="error">
            Введите корректный адрес (Например: https://site.ru/)
          </p>
        </template>
        <template v-if="getService('social')">
          <input
            v-model="contactForm.urlSocial"
            type="text"
            placeholder="Ссылка на вашу группу(если имеется конечно)"
          />
        </template>
        <template v-if="getService('web')">
          <input
            v-model="contactForm.urlWeb"
            type="text"
            placeholder="Возможно у вас есть ссылка на пример"
          />
        </template>
      </div>
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
</template>
<script>
import { required, numeric, email, url } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      contactForm: {
        name: '',
        phone: '',
        email: '',
        method: 'Любым способом',
        urlAdd: '',
        urlSocial: '',
        urlWeb: ''
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
        required,
        numeric
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
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      this.$nuxt.$loading.finish()
    })
  },
  methods: {
    getService(view) {
      return this.service.includes(view)
    },
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
            urlWeb: this.contactForm.urlWeb
          }

          await this.$store.dispatch('applications/create', formData)

          this.submitStatus = 'OK'
          this.$v.$reset()

          this.contactForm.name = ''
          this.contactForm.phone = ''
          this.contactForm.email = ''
          this.contactForm.method = 'Любым способом'
          this.contactForm.urlAdd = ''
          this.contactForm.urlSocial = ''
          this.contactForm.urlWeb = ''
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper__contact {
  padding: 0;
  padding-top: 50px;
}
.form {
  display: grid;
  grid-template-areas:
    'input radio'
    'check block';

  grid-template-rows: 1fr 370px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1vw;
}

h2 {
  font-weight: bold;
  font-size: 48px;
  line-height: 22px;
  text-align: center;
}
.form__group {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 5px;
  padding-top: 40px;
  box-shadow: 0 0 7px #000;
  border-radius: 5px;
}
.form__title {
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
}

.contact {
  grid-area: input;

  &:focus,
  :hover {
    background-repeat: no-repeat;
    background-position: left;
    background-size: 5px;
    background-image: linear-gradient(180deg, #6fcf97 0%, #02fdb2 186.42%);
  }
}

.contact,
.block {
  input {
    min-width: 390px;
    height: 50px;
    padding-left: 8px;
    margin-bottom: 40px;
    border-radius: 5px;
    border: 0;

    font-size: 14px;
    line-height: 22px;
  }
  &:focus,
  :hover,
  :active {
    background-repeat: no-repeat;
    background-position: left;
    background-size: 5px;
    background-image: linear-gradient(180deg, #6fcf97 0%, #02fdb2 186.42%);
  }
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
  background: #747d88;

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
    background: #fff;
    transition: all 0.3s ease-out;
  }
}
.check__input:checked + .check__box {
  transition: 0.3s ease-out;
  background: rgb(255, 255, 255);
  &::before {
    background-image: linear-gradient(90deg, #f27a54 0%, #a154f2 100%);
    transition: all 0.3s ease-out;
    transform: translateX(20px);
  }
}

.block {
  grid-area: block;
  background-repeat: no-repeat;
  background-size: cover;
}

.form-group__message,
.error {
  padding: 0;
  font-size: 0.75rem;
  line-height: 1;
  display: none;

  margin-top: -1.6875rem;
  margin-bottom: 0.9375rem;
}
.form-group--error {
  border: 2px solid #f57f6c !important;
}

.form-group--error + .form-group__message,
.form-group--error + .error {
  display: block;
  color: #f57f6c;
}

@media screen and(max-width: 660px) {
  h2 {
    font-size: 28px;
    line-height: 22px;
  }
  .form {
    display: grid;
    grid-template-areas:
      'input'
      'radio'
      'check'
      'block';

    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-gap: 1vw;
  }
  .contact,
  .block {
    input {
      min-width: 100%;
    }
  }
}
</style>
