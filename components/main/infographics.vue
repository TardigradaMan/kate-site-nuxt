<template>
  <div class="info">
    <div class="info-list">
      <div class="info-item color-1">
        <div class="info-content">
          <div class="info-bg bg-1"></div>
          <div class="info-icon left"></div>
          <div class="info-title">
            <span>A</span>
          </div>
        </div>
        <div class="info-text">
          <h3>Заголовок</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit atque facilis magni, nisi aliquam blanditiis iure
            vero, ad quo harum natus voluptatibus autem voluptate debitis porro
            praesentium excepturi laborum sed!
          </p>
        </div>
      </div>
      <div class="info-item color-2">
        <div class="info-content">
          <div class="info-bg bg-2"></div>
          <div class="info-icon left"></div>
          <div class="info-title">
            <span>B</span>
          </div>
        </div>
        <div class="info-text">
          <h3>Заголовок</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit atque facilis magni, nisi aliquam blanditiis iure
            vero, ad quo harum natus voluptatibus autem voluptate debitis porro
            praesentium excepturi laborum sed!
          </p>
        </div>
      </div>
      <div class="info-item color-3">
        <div class="info-content">
          <div class="info-bg bg-3"></div>
          <div class="info-icon right"></div>
          <div class="info-title">
            <span>C</span>
          </div>
        </div>
        <div class="info-text">
          <h3>Заголовок</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit atque facilis magni, nisi aliquam blanditiis iure
            vero, ad quo harum natus voluptatibus autem voluptate debitis porro
            praesentium excepturi laborum sed!
          </p>
        </div>
      </div>
      <div class="info-item color-4">
        <div class="info-content ">
          <div class="info-bg bg-4"></div>
          <div class="info-icon right"></div>
          <div class="info-title">
            <span class="color-title">D</span>
          </div>
        </div>
        <div class="info-text">
          <h3>Заголовок</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit atque facilis magni, nisi aliquam blanditiis iure
            vero, ad quo harum natus voluptatibus autem voluptate debitis porro
            praesentium excepturi laborum sed!
          </p>
        </div>
      </div>
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
.info {
  &-list {
    padding: 10px;
    display: grid;
    grid-template: 1fr 1fr/1fr 1fr;
    gap: 40px;
  }
  &-item {
    display: grid;
    gap: 40px;
  }
  &-content {
    grid-area: content;
    position: relative;
    width: 200px;
    height: 200px;
  }
  &-bg {
    position: relative;
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
  &-icon {
    position: absolute;
    top: 25px;
    left: 25px;
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
    top: 15px;
    left: 15px;
    z-index: 3;

    background-clip: border-box;
    background-clip: padding-box;
    background-clip: content-box;

    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 10px 10px 20px #d9d9d9, inset 1px 1px 10px #d9d9d9,
      -1px -1px 1px #ffffff;
    & span {
      display: inline-block;
      position: absolute;
      padding: 0;
      margin: 0;
      top: 50%;
      left: 50%;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      // text-align: center;
      font-size: 54px;
      font-weight: 900;
      text-shadow: -2px -2px 3px rgba(255, 255, 255, 0.1),
        2px 2px 3px rgba(0, 0, 0, 0.404);
      & > .color-title {
        color: inherit;
      }
    }
  }
}

.info-text {
  grid-area: text;
  & p {
    color: $grey;
  }
}

.right {
  left: -20px;
  & + .info-title {
    left: -35px;
  }
}
</style>
