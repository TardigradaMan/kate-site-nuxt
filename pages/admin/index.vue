<template>
  <div>
    <div v-if="true">
      <h1>Админ</h1>
    </div>
    <div v-else>
      <h3>Клиентов нет</h3>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth-admin'],

  data() {
    return {}
  },

  // После того как дом создан(created юудет выпольняться как на сервере так и на клиенте)
  mounted() {
    const { message } = this.$route.query
    if (message === 'login') {
      // Тут нужно вывести в модальное ошибок
      console.log('Нужно авторизоваться')
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  margin-top: 100px;
}
</style>
