<template>
  <div>
    <h1>{{ news.title }}</h1>
    <p>{{ news.text }}</p>
    <span>Дата публикации: {{ new Date().getFullYear() }}</span>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['news']
}
</script>

<style></style>
