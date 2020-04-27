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

    <button type="primary" native-type="submit" round>
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
form {
  width: 600px;
}
</style>
