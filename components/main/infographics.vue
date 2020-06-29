<template>
  <div class="info">
    <div class="info-list">
      <div class="info-item color-1">
        <div class="info-content">
          <div class="info-bg bg-1"></div>
          <div class="info-icon"></div>
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
          <div class="info-icon"></div>
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
          <div class="info-icon"></div>
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
          <div class="info-icon"></div>
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
.bg-1 {
  background: rgb(54, 247, 128);
}
.bg-2 {
  background: rgb(247, 141, 54);
}
.bg-3 {
  background: rgb(54, 131, 247);
}
.bg-4 {
  background: rgb(247, 54, 96);
}
.color-1 {
  color: rgb(54, 247, 128);
  grid-template-areas: 'content text';
}
.color-2 {
  color: rgb(247, 141, 54);
  grid-template-areas: 'content text';
}
.color-3 {
  color: rgb(54, 131, 247);
  grid-template-areas: 'text content';
}

.color-4 {
  color: rgb(247, 54, 96);
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
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    border-radius: 20px;
    width: 100%;
    height: 100%;

    // background-clip: border-box;

    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.459),
      inset 2px 2px 5px 2px rgba(0, 0, 0, 0.678),
      inset -3px -3px 5px rgba(172, 172, 172, 0.377);
  }
  &-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;

    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);

    box-shadow: 15px 15px 30px 0 rgb(109, 109, 109), inset 2px 2px 10px #ffffff,
      inset -2px -2px 5px rgba(0, 0, 0, 0.1);
  }
  &-title {
    position: absolute;
    top: 10px;
    left: 10px;
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
      position: relative;
      padding: 0;
      margin: 0;
      top: 50%;
      left: 50%;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 60px;
      height: 60px;
      text-align: center;
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
</style>
