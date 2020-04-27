<template>
  <div>Очищаем данные</div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['auth-admin'],
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>
