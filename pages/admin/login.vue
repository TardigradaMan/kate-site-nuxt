<template>
  <div class="login">
    <div class="login__wrapper">
      <div class="login__header">
        <h2>Войти в панель администратора</h2>
      </div>
      <div class="login__body">
        <form ref="form" @submit.prevent="onSubmit" :model="controls">
          <label>
            <input
              v-model.trim="controls.login"
              type="text"
              placeholder="Введите ваш логин"
            />
          </label>
          <div class="mb2">
            <label>
              <input
                v-model.trim="controls.password"
                type="password"
                placeholder="Введите пароль"
              />
            </label>
          </div>
          <button class="button btn-admin" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      // loading: false,
      controls: {
        login: '',
        password: ''
      }
    }
  },

  methods: {
    async onSubmit() {
      try {
        const formLogin = {
          login: this.controls.login,
          password: this.controls.password
        }
        await this.$store.dispatch('auth/login', formLogin)
        // Нужна валидация до закрытия!!!!!
        this.$router.push('/admin')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 25em;
  background-color: $bg-widget;
  border-radius: 5px;
  box-shadow: $shadow-out;
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px 15px 20px 15px;
}

.login__header > h2 {
  margin: 0;
  padding-bottom: 40px;
}

label > input {
  min-width: 25em;
  height: 50px;
  padding-left: 8px;
  margin-bottom: 40px;
  border-radius: 5px;
  border: 0;
  font-size: 14px;
  line-height: 22px;

  &:focus,
  :hover {
    background-repeat: no-repeat;
    background-position: left;
    background-size: 5px;
    background-image: linear-gradient(180deg, #6fcf97 0%, #02fdb2 186.42%);
  }
}
</style>
