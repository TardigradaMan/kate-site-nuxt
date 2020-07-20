<template>
  <div class="page-error">
    <nuxt-link class="error__link" to="/"
      >Быстрее вернуться домой(нажать сюда)</nuxt-link
    >
  </div>
</template>

<script>
export default {
  layout: 'error'
}
</script>

<style lang="scss" scoped>
.page-error {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  // padding-top: 200px;
  // font-size: 30px;
  font-family: sans-serif;
  z-index: 1000;
  // background: $bg-color, center / cover no-repeat url('~assets/img/404.jpg');
}

.error__link {
  display: inline-block;
  color: $grey;
  padding-top: 20px;
  font-size: 1em;
}

.webp .page-error {
  background: center / cover url('~assets/img/404.webp') no-repeat;

  @media (max-width: $sm-width-max) {
    // CSS для ширины от 576px до 767px */
    background: center / cover url('~assets/img/404-xs.webp') no-repeat;
  }
}

.no-webp .page-error {
  background: $bg-color, center / cover no-repeat url('~assets/img/404.jpg');

  @media (max-width: $sm-width-max) {
    // CSS для ширины от 576px до 767px */

    background: $bg-color,
      center / cover no-repeat url('~assets/img/404-xs.jpg');
  }
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
</style>
