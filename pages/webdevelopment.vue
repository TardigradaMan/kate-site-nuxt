<template>
  <div class="web">
    <section class="head">
      <div class="wrapper">
        <h1 class="head__title">
          Разработка веб приложений и сайтов для любых нужд
        </h1>
        <p class="head__subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
          pariatur!
        </p>
      </div>
    </section>
    <section class="description">
      <div class="wrapper">
        <h3>Тут описание</h3>
        <app-canvas></app-canvas>
      </div>
    </section>
    <section class="examples">
      <div class="wrapper">
        <h3>Тут пару примеров макетов</h3>
      </div>
    </section>
  </div>
</template>
<script>
import appCanvas from '~/components/main/canvas'
export default {
  components: {
    appCanvas
  }
}
</script>
<style lang="scss" scoped>
.head {
  height: 100vh;
  text-align: center;

  &__title {
    padding-top: 40vh;
    margin: 0;
  }
}
</style>
