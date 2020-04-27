<template>
  <div class="wrapper__contact">
    <h2>Заполните поля и мы сразу начнем</h2>
    <form @submit.prevent="onSubmit" class="form">
      <div class="form__group contact">
        <input
          id="name"
          v-model="contactForm.name"
          type="text"
          name="name"
          placeholder="Ваше имя"
        />
        <input
          id="name"
          v-model="contactForm.phone"
          type="tel"
          name="phone"
          placeholder="Ваш номер для связи"
        />
        <input
          id="name"
          v-model="contactForm.email"
          type="email"
          name="email"
          placeholder="Ваш email для связи"
        />
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
            v-model="contactForm.urlAdd"
            type="text"
            placeholder="Ссылка на ваш товар/услугу"
          />
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
        <input class="button" type="submit" value="Отправить" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      communicationMethod: {
        phone: 'Связаться с помощью телефона',
        email: 'Связаться с помощью электронной почты',
        messagingApps: 'Через whatsapp или telegram',
        all: 'Любым способом'
      },
      contactForm: {
        name: '',
        phone: '',
        email: '',
        method: 'Любым способом',
        urlAdd: '',
        urlSocial: '',
        urlWeb: ''
      },

      typeOfService: {
        add: 'add',
        social: 'social',
        web: 'web'
      },
      service: [],

      bgImgDefault: 'url(~assets/img/Кот.png)'
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
      try {
        const formData = {
          name: this.contactForm.name,
          phone: this.contactForm.phone,
          email: this.contactForm.email,
          method: this.contactForm.method,
          urlAdd: this.contactForm.urlAdd,
          urlSocial: this.contactForm.urlSocial || '',
          urlWeb: this.contactForm.urlWeb
        }

        console.log(formData)

        await this.$store.dispatch('applications/create', formData)

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
  padding-top: 0;

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
