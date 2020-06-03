<template>
  <section class="social">
    <!-- Может засунуть повторения в отдельный компонент?! -->
    <div class="social__item img">
      <img src="~assets/img/Описание_истории.png" alt="Реклама" />
    </div>
    <div class="social__item description">
      <h3>Реклама в историях</h3>
      <p>
        Добавьте рекламу в истории в Instagram в свои материалы. Охватите более
        500 млн человек, использующих истории в Instagram каждый день. Узнайте
        больше о рекламе в историях и ее характеристиках.
      </p>
      <button @click="openForm" class="button social__btn">Уже хочу</button>
    </div>
    <div class="social__item description">
      <h3>Реклама с фото</h3>
      <p>
        Этот простой формат рекламы поможет вам показать свою компанию или
        товары во всей красе. Можно использовать фото формата пейзажа или
        квадрата.
      </p>
      <button @click="openForm" class="button ">Уже хочу</button>
    </div>
    <div class="social__item img">
      <img src="~assets/img/Описание_лента.png" alt="Реклама" />
    </div>
    <div class="social__item img">
      <img src="~assets/img/Описание_истории.png" alt="Реклама" />
    </div>
    <div class="social__item description">
      <h3>Видеореклама</h3>
      <p>
        Этот формат дарит все преимущества рекламы с фото плюс движение и звук.
        Кроме того, теперь вы можете делиться видео длиной до 120 секунд в
        формате пейзажа или квадрата.
      </p>
      <button @click="openForm" class="button social__btn">Уже хочу</button>
    </div>
    <p>Нужно добавить преимущества рекламы</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      social: {
        stories: {
          title: 'Реклама в историях',
          description:
            'Добавьте рекламу в истории в Instagram в свои материалы. Охватите более 500 млн человек, использующих истории в Instagram каждый день. Узнайте больше о рекламе в историях и ее характеристиках.',
          src: '~assets/img/Описание_истории.png'
        }
      }
    }
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
    'first second'
    'third fourth';

  grid-template-rows: 300px 300px 300px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1vw;
  padding: 15px;
  &__item {
    box-shadow: 0 0 5px #000;
    position: relative;
    & > img {
      display: block;
      max-height: 100%;
      margin: 0 auto;
    }
  }
  &__btn {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.description > p {
  font-size: 1.2em;
  padding: 10px;
}
</style>
