<template>
  <div class="error-msg">
    <h3 class="error-msg__title">{{ errorMessage }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: 'Не удалось получить данные, попробуйте перезагрузить страницу'
    }
  }
}
</script>
<style lang="scss" scoped>
.error-msg {
  &__title {
    text-align: center;
  }
}
</style>
