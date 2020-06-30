<template>
  <ul class="stages__list stage">
    <li class="stages__item stage-1">
      <h3>
        <slot name="title1"></slot>
      </h3>
      <p>
        <slot name="text1"></slot>
      </p>
    </li>
    <li class="stages__item stage-2">
      <h3>
        <slot name="title2"></slot>
      </h3>
      <p>
        <slot name="text2"></slot>
      </p>
    </li>
    <li class="stages__item stage-3">
      <h3>
        <slot name="title3"></slot>
      </h3>
      <p>
        <slot name="text3"></slot>
      </p>
    </li>
    <li class="stages__item stage-4">
      <h3>
        <slot name="title4"></slot>
      </h3>
      <p>
        <slot name="text4"></slot>
      </p>
    </li>
    <li class="stages__item stage-5">
      <h3>
        <slot name="title5"></slot>
      </h3>
      <p>
        <slot name="text5"></slot>
      </p>
    </li>
    <li class="stages__item stage-6">
      <h3>
        <slot name="title6"></slot>
      </h3>
      <p>
        <slot name="text6"></slot>
      </p>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
%arrow {
  content: '';
  position: absolute;
  // top: 50%;
  transform: translateY(-50%);
  // align-items: center;
  right: -90px;
  width: 80px;
  height: 50px;
  background: center/ 100% url('~assets/img/arrow.png') no-repeat;
}
.stages {
  &__list {
    margin: 0;
    padding: 0;
    // background: rgb(56, 118, 122);
    list-style: none;

    display: grid;
    grid-template: 1fr 1fr/ 1fr 1fr 1fr;
    gap: 100px;
  }
  &__item {
    // background: rgb(243, 229, 151);
    padding: 15px;
    position: relative;
    box-shadow: $shadow-out;
    color: $grey;
    border-radius: 10px;
    &::after {
      @extend %arrow;
    }
  }
}

.stage-1::after {
  top: 50%;
}
.stage-2::after {
  top: 50%;
}
.stage-3::after {
  bottom: -80px;

  left: calc(50% - 60px);
  transform: rotate(90deg) translateY(-50%);
}
.stage-4::after {
  transform: scale(-1, 1) translateY(-50%);
  top: 50%;
}
.stage-5::after {
  transform: scale(-1, 1) translateY(-50%);
  top: 50%;
}
.stage-6::after {
  display: none;
}
</style>
