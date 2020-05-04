<template>
  <section class="home">
    <div class="wrapper">
      <div></div>
      <h1 class="home__title">
        Раскажи о себе <span class="home__title--bg">миру</span>
      </h1>
      <p class="home__subtitle"></p>
      <button @click="openForm" class="button home__button">Получить</button>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    openForm() {
      this.$router.push('/contact')
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  background: url(https://im0-tub-ru.yandex.net/i?id=eab0e1b995f2c8861ea50c27af8601bb-l&n=13);
  background-size: cover;
}
.home {
  margin: 0 auto;
  text-align: center;
  // min-height: 100vh;
  // background: url('../../img/bg_home.jpg') no-repeat center;
  // background-size: cover;

  padding-top: 270px;

  // background: url('../../img/Ресурс\ 19@3x.png') no-repeat;
  // background-position: right;
  // background-size: 600px;
  // background-color: #30363d;
  &__title {
    font-size: 50px;
    line-height: 56px;
    font-family: 'Russo One', sans-serif;
    text-transform: uppercase;

    margin-bottom: 30px;
    max-width: 700px;
    margin: 0 auto;

    &--bg {
      background-image: url('https://i.stack.imgur.com/zN1F6.jpg');
      background-size: cover;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__subtitle {
    max-width: 600px;
    margin: 0 auto;
    font-size: 19px;
    line-height: 30px;
    margin-bottom: 30px;
  }
}
</style>
