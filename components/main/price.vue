<template>
  <div class="price">
    <!-- <nav class="price-nav">
      <ul class="price-nav__list">
        <li class="price-nav__item">Соц группы</li>
        <li class="price-nav__item">Реклама</li>
        <li class="price-nav__item">Ещё что?</li>
      </ul>
    </nav> -->
    <div class="price-list">
      <div class="price-item color-1">
        <div class="price-content">
          <div class="price-bg bg-1"></div>
          <div class="price-card card elementary ">
            <div class="card__header bg-1">
              <p class="card__description">Необходимый минимум</p>
              <h3 class="card__title">Заголовок</h3>
              <span class="card__price">1000 &#x20bd;</span>
            </div>
            <button class="card__button">Выбрать</button>
            <ul class="card__list">
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
            </ul>
          </div>
          <div class="price-title">
            <span>минимум</span>
          </div>
        </div>
      </div>
      <div class="price-item color-2">
        <div class="price-content">
          <div :style="{ border: borderBg }" class="price-bg bg-2"></div>
          <div class="price-card card middle">
            <div class="card__header bg-2">
              <p class="card__description">Необходимый минимум</p>
              <h3 class="card__title">Заголовок</h3>
              <span class="card__price">1000 &#x20bd;</span>
            </div>
            <button class="card__button">Выбрать</button>
            <ul class="card__list">
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
              <li class="card__item off">Lorem ipsum dolor sit.</li>
            </ul>
          </div>
          <div class="price-title">
            <span>средне</span>
          </div>
        </div>
      </div>
      <div class="price-item color-3">
        <div class="price-content">
          <div class="price-bg bg-3"></div>
          <div class="price-card card high">
            <div class="card__header bg-3">
              <p class="card__description">Необходимый минимум</p>
              <h3 class="card__title">Заголовок</h3>
              <span class="card__price">1000 &#x20bd;</span>
            </div>
            <button class="card__button">Выбрать</button>
            <ul class="card__list">
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
              <li class="card__item ok">Lorem ipsum dolor sit.</li>
            </ul>
          </div>
          <div class="price-title">
            <span>хорошо</span>
          </div>
        </div>
      </div>
      <!-- <div class="price-item color-4">
        <div class="price-content ">
          <div class="price-bg bg-4"></div>
          <div class="price-card right"></div>
          <div class="price-title">
            <span class="color-title">D</span>
          </div>
        </div>
        <div class="price-text">
          <h3>Заголовок</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit atque facilis magni, nisi aliquam blanditiis iure
            vero, ad quo harum natus voluptatibus autem voluptate debitis porro
            praesentium excepturi laborum sed!
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    borderBg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// color
.bg-1 {
  background: $green;
}
.bg-2 {
  background: $orange;
}
.bg-3 {
  background: $blue;
}
.bg-4 {
  background: $red;
}
.color-1 {
  color: $green;
  grid-template-areas: 'content text';
}
.color-2 {
  color: $orange;
  grid-template-areas: 'content text';
}
.color-3 {
  color: $blue;
  grid-template-areas: 'text content';
}
.color-4 {
  color: $red;
  grid-template-areas: 'text content';
}
.price {
  &-list {
    margin: 20px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    // align-content: center;
    align-items: center;
  }
  &-item {
  }
  &-content {
    grid-area: content;
    position: relative;
    width: 250px;
    height: 400px;
  }
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    border-radius: 20px;
    width: 100%;
    height: 100%;

    box-shadow: inset 4px 4px 10px rgb(0, 0, 0),
      inset 4px 4px 15px 3px rgba(0, 0, 0, 0.678),
      inset -1px -1px 2px rgba(255, 255, 255, 0.5),
      inset -1px -1px 5px rgb(255, 255, 255),
      inset -1px -1px 1px rgba(0, 0, 0, 0.274);

    // border: 1px solid rgb(255, 255, 255);

    // border-bottom: 2px solid rgb(255, 255, 255);
    // border-right: 2px solid rgb(255, 255, 255);

    border: 1px solid rgb(75, 75, 75);

    // border-bottom: 2px solid rgba(0, 0, 0, 0.705);
    // border-right: 2px solid rgba(0, 0, 0, 0.5);
  }
  &-card {
    position: absolute;
    top: -25px;
    left: 50px;
    z-index: 2;

    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(145deg, #dfdfdf 30%, #ffffff);

    box-shadow: 15px 15px 30px 0 rgba(0, 0, 0, 0.801),
      inset 2px 2px 10px #ffffff, inset -2px -2px 5px rgba(0, 0, 0, 0.1);
  }
  &-title {
    position: absolute;
    top: 50%;
    // max-width: 250px;
    // transform: rotate(270deg);
    left: 15px;
    z-index: 1;
    transform-origin: 0 0 0;
    transform: rotate(270deg) translateX(-50%);

    & > span {
      display: inline-block;
      color: #fff;
      font-size: 30px;
      text-transform: uppercase;
      font-family: 'Rubik Mono One', sans-serif;

      color: inherit;

      // тень
      text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.5), 0px 1px 1px #444;
    }
  }
}

.card {
  overflow: hidden;
  position: relative;

  border: 1px inset rgba(0, 0, 0, 0.096);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    height: 50px;
    width: 100%;

    clip-path: polygon(10% 20%, 50% 100%, 0 100%, 0 50%);
  }
  &__header {
    clip-path: polygon(100% 0, 100% 85%, 75% 100%, 0 64%, 0 0);

    height: 200px;
    color: #fff;

    padding-top: 20px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  }
  &__description {
    padding: 0;
    margin: 0;
  }
  &__title {
    margin: 0;
    margin-top: 20px;
    text-align: center;
    color: $bg-color;

    font-size: 1.4em;

    text-transform: uppercase;
  }
  &__price {
    font-size: 3em;
  }
  &__button {
    display: block;
    position: relative;
    z-index: 10;

    margin: 0 auto;
    margin-top: -30px;
    padding: 7px 15px;
    text-transform: uppercase;
    font-size: 12px;

    border-radius: 5px;
    border: none;
    outline: none;
    background: $bg-color;
    color: #c0c0c0;
    opacity: 0.8;

    cursor: pointer;
    &:hover,
    :focus {
      color: #fff;
      opacity: 1;
    }
    // &:active {
    //   color: $green;
    // }
  }
  &__list {
    display: flex;
    flex-flow: column wrap;

    margin: 0;
    margin-top: 30px;
    padding: 0;
    align-content: center;

    color: $bg-color;
    font-size: 1.12em;

    list-style: none;
  }
  &__item {
    // list-style-image: url('~assets/img/ok.png');
    &::before {
      content: '';
      display: inline-block;
      height: 15px;
      width: 15px;
      background-size: 15px;
      background-image: url('~assets/img/off.png');
      background-repeat: no-repeat;
      margin-right: 10px;
      background-position: center center;
      vertical-align: middle;
    }
  }
  .ok::before {
    background-image: url('~assets/img/ok.png');
  }
  .off::before {
    background-image: url('~assets/img/off.png');
  }
}
.color-1 {
  & .card::after {
    background: $green;
  }
  & .card__button {
    &:active {
      color: $green;
    }
  }
}

.color-2 {
  & .card::after {
    background: $orange;
  }
  & .card__button {
    &:active {
      color: $orange;
    }
  }
}
.color-3 {
  & .card::after {
    background: $blue;
  }
  & .card__button {
    &:active {
      color: $blue;
    }
  }
}
</style>
