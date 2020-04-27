<template>
  <section class="home">
    <div class="wrapper">
      <h1 class="home__title">Реклама в интернете</h1>
      <p class="home__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
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
}

.home__title {
  font-size: 44px;
  line-height: 56px;
  margin-bottom: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.home__subtitle {
  max-width: 600px;
  margin: 0 auto;
  font-size: 19px;
  line-height: 30px;
  margin-bottom: 30px;
}
</style>
