<template>
  <form ref="form" :model="controls" @submit.prevent="onSubmit">
    <h2>Создать пользователя</h2>

    <label label="Логин" prop="login">
      <input v-model.trim="controls.login" />
    </label>

    <div class="mb2">
      <label label="Пароль" prop="password">
        <input v-model.trim="controls.password" type="password" />
      </label>
    </div>

    <button class="button" type="submit">
      Создать
    </button>
  </form>
</template>
<script>
export default {
  layout: 'admin',
  middleware: ['auth-admin'],

  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        const formData = {
          login: this.controls.login,
          password: this.controls.password
        }
        await this.$store.dispatch('auth/createUser', formData)
        this.controls.login = ''
        this.controls.password = ''
        this.loading = false
      } catch (e) {
        this.loading = false
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
