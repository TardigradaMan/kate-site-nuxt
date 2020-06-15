<template>
  <section class="price">
    <h1>Страница с денежками</h1>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    openForm() {
      this.$router.push('/contact')
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  margin: 0;
  padding: 0;
}
</style>
