<template>
  <section class="social">
    <!-- Может засунуть повторения в отдельный компонент?! -->
    <div class="social__item img">
      <img src="~assets/img/insta1-1x.png" alt="Реклама" />
    </div>
    <div class="social__item description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        voluptate distinctio alias iste nesciunt dolorum, illum sed provident
        perferendis hic commodi, tempore cumque voluptatum officiis recusandae
        minus qui adipisci ea.
      </p>
      <button @click="openForm" class="button">Уже хочу</button>
    </div>
    <div class="social__item description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        voluptate distinctio alias iste nesciunt dolorum, illum sed provident
        perferendis hic commodi, tempore cumque voluptatum officiis recusandae
        minus qui adipisci ea.
      </p>
      <button @click="openForm" class="button">Уже хочу</button>
    </div>
    <div class="social__item img">
      <img src="~assets/img/insta1-1x.png" alt="Реклама" />
    </div>
    <div class="social__item img">
      <img src="~assets/img/insta1-1x.png" alt="Реклама" />
    </div>
    <div class="social__item description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        voluptate distinctio alias iste nesciunt dolorum, illum sed provident
        perferendis hic commodi, tempore cumque voluptatum officiis recusandae
        minus qui adipisci ea.
      </p>
      <button @click="openForm" class="button">Уже хочу</button>
    </div>
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
.social {
  display: grid;
  grid-template-areas:
    'input radio'
    'check block';

  grid-template-rows: 300px 300px 300px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1vw;
  padding: 15px;
  &__item {
    box-shadow: 0 0 5px #000;
    & > img {
      max-height: 100%;
    }
  }
}
</style>
