<template>
  <section class="social">
    <div
      v-for="item in social"
      :key="item.src"
      :style="`grid-area:${item.imgClass}`"
      class="social__item img"
    >
      <img :src="require(`../assets/img/${item.src}`)" :alt="item.title" />
    </div>
    <div
      v-for="item in social"
      :key="item.title"
      :style="`grid-area:${item.textClass}`"
      class="social__item description"
    >
      <h3>{{ item.title }}</h3>
      <p>
        {{ item.description }}
      </p>
      <button @click="openForm" class="button social__btn">Уже хочу</button>
    </div>
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
          src: 'Описание_истории.png',
          imgClass: 'grid_1',
          textClass: 'grid_2'
        },
        photo: {
          title: 'Реклама с фото',
          description:
            'Этот простой формат рекламы поможет вам показать свою компанию или товары во всей красе. Можно использовать фото формата пейзажа или квадрата.',
          src: 'Описание_лента.png',
          imgClass: 'grid_4',
          textClass: 'grid_3'
        },
        video: {
          title: 'Видеореклама',
          description:
            'Этот формат дарит все преимущества рекламы с фото плюс движение и звук. Кроме того, теперь вы можете делиться видео длиной до 120 секунд в формате пейзажа или квадрата.',
          src: 'Описание_видео.png',
          imgClass: 'grid_5',
          textClass: 'grid_6'
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
    'grid_1 grid_2'
    'grid_3 grid_4'
    'grid_5 grid_6';

  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 500px);
  grid-gap: 1vw;

  gap: 1vw;
  padding: 15px;
  &__item {
    box-shadow: 0 0 5px #000;
    position: relative;
    min-width: 250px;
    & > img {
      display: block;
      margin: 0 auto;

      height: 100%;
      width: auto;
    }
  }
  &__btn {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.description {
  text-align: center;
  & > h3 {
    font-size: 1.5em;
    padding: 10px;
  }
  & > p {
    font-size: 1.2em;
    padding: 10px;
  }
}
@media screen and(max-width: $mobile-width) {
  .social {
    grid-template-areas:
      'grid_1'
      'grid_2'
      'grid_4'
      'grid_3'
      'grid_5'
      'grid_6';

    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 300px);
    &__item {
      min-width: 320px;
    }
    & > img {
      max-width: 450px;
    }
  }
}
</style>
