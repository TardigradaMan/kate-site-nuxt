<template>
  <section class="advertising">
    <div class="header">
      <div class="wrapper">
        <div class="header__wrapper">
          <h1 class="header__title">Реклама моя реклама</h1>
          <p class="header__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            harum a vel laudantium, esse voluptas natus unde, molestias maiores
            asperiores, deserunt consequatur eaque illum? Corporis ducimus est
            ut voluptas similique?
          </p>
          <button @click="openForm" class="button">Подробнее</button>
        </div>
      </div>
    </div>

    <div class="description">
      <div class="wrapper">
        <ul class="description__list">
          <li class="description__item description__item--left">
            <h3>Заголовок 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--right">
            <h3>Заголовок 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--central">
            <h3>Заголовок центр</h3>
            <p>
              тут будет изображение
            </p>
          </li>
          <li class="description__item description__item--left">
            <h3>Заголовок 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
          <li class="description__item description__item--right">
            <h3>Заголовок 5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, perferendis? Rem, odit minima deserunt deleniti totam
              consequuntur fugiat esse quasi corrupti nihil temporibus quidem
              perferendis quisquam accusamus molestiae quo sapiente?
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="skills">
      <ul class="skills__list">
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
        <li class="skills__item">Скилл</li>
      </ul>
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
.advertising {
}
.header {
  height: 100vh;
  background: url('~assets/img/Home_ads-1x.png') right 50px center no-repeat,
    rgba(109, 209, 235, 0.226);

  background-size: 50%;

  &__wrapper {
    width: 40%;
    padding: 30vh 10px;
  }
  &__title {
    padding: 0;

    font-size: 35px;
    font-weight: 700;
  }
}
.description {
  padding: 30px 10px;
  background: rgba(121, 223, 107, 0.329);
  &__list {
    display: grid;
    /* grid-template-rows / grid-template-columns values */
    grid-template: 1fr 1fr/ 1fr 1fr 1fr;
    gap: 10px;

    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
  &__item {
    background: rgb(89, 169, 189);
    padding: 10px;
    &--left {
      text-align: right;
      padding-right: 70px;
      position: relative;
      &::after {
        content: '';
        background-image: url('~assets/img/icon_descript.png');
        background-size: cover;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;

        width: 65px;
        height: 65px;
      }
    }
    &--central {
      text-align: center;
      grid-row: 1/3;
      grid-column: 2/3;
    }
    &--right {
      text-align: left;
      padding-left: 70px;
      position: relative;
      &::before {
        content: '';
        background-image: url('~assets/img/icon_descript.png');
        background-size: cover;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;

        transform: scale(-1, 1);

        width: 65px;
        height: 65px;
      }
    }
  }
}

.skills {
  background: rgb(230, 118, 202);
  padding: 30px 30px;
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  &__item {
    padding: 10px;
    border: 2px solid rgb(180, 103, 103);
    border-radius: 7px;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
