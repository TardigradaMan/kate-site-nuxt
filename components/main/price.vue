<template>
  <div class="price">
    <nav class="price-nav">
      <ul class="price-nav__list">
        <li class="price-nav__item">Соц группы</li>
        <li class="price-nav__item">Реклама</li>
        <li class="price-nav__item">Ещё что?</li>
      </ul>
    </nav>
    <div class="price-list">
      <div class="price-item color-1">
        <div class="price-content">
          <div class="price-bg bg-1"></div>
          <div class="price-card card elementary">
            <h3 class="card__title">Заголовок</h3>
            <ul class="card__list">
              <li class="card__item">первый</li>
              <li class="card__item">второй</li>
              <li class="card__item">третий</li>
            </ul>
          </div>
          <div class="price-title">
            <span>минимум</span>
          </div>
        </div>
      </div>
      <div class="price-item color-2">
        <div class="price-content">
          <div class="price-bg bg-2"></div>
          <div class="price-card card middle">
            <h3 class="card__title">Заголовок</h3>
            <ul class="card__list">
              <li class="card__item">первый</li>
              <li class="card__item">второй</li>
              <li class="card__item">третий</li>
              <li class="card__item">четвертый</li>
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
            <h3 class="card__title">Заголовок</h3>
            <ul class="card__list">
              <li class="card__item">первый</li>
              <li class="card__item">второй</li>
              <li class="card__item">третий</li>
              <li class="card__item">четвертый</li>
              <li class="card__item">пятый</li>
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
export default {}
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

    border: 1px solid rgba(255, 255, 255, 0.897);

    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
  }
  &-card {
    position: absolute;
    top: -25px;
    left: 50px;
    z-index: 2;

    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);

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

.price-text {
  grid-area: text;
  & p {
    color: $grey;
  }
}

.card {
  overflow: hidden;
  &__title {
    background-clip: content-box;
    background: #000;
    background-clip: padding-box;
    // // background-clip: border-box;
    margin: 0;
    padding: 15px 0;
    text-align: center;
  }
  &__list {
    margin: 0;
    padding: 0;

    list-style: none;
    display: flex;
    flex-flow: column wrap;

    align-content: center;
  }
}
</style>
