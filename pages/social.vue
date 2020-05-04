<template>
  <section class="social">
    <div class="social__img">
      <img src="~assets/img/тест1.png" alt="Реклама в социальных сетях" />
    </div>
    <div class="social__description">
      <img src="~assets/img/paint.png" alt="Описание" />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.social {
  padding-top: 100px;
}
.social__img {
  width: 50%;
  right: 100px;
  height: 500px;

  margin: 0;
  margin-left: 50%;
  img {
    height: 100%;
  }
}
.social__description {
  width: 60%;
  right: 100px;

  margin: 0;
  margin-right: 50%;
  img {
    width: 100%;
  }
}
</style>
