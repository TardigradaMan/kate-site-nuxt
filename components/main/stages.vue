<template>
  <ul class="stages__list stage">
    <li class="stages__item stage-1">
      <h3>
        <slot name="title1"></slot>
      </h3>
      <p>
        <slot name="text1"></slot>
      </p>
      <span class="arrow-bg dark light"></span>
      <span class="arrow-top"></span>
      <span class="arrow-bottom"></span>
      <span class="arrow dark light"></span>
    </li>
    <li class="stages__item stage-2">
      <h3>
        <slot name="title2"></slot>
      </h3>
      <p>
        <slot name="text2"></slot>
      </p>
      <span class="arrow-bg dark light"></span>
      <span class="arrow-top"></span>
      <span class="arrow-bottom"></span>
      <span class="arrow dark light"></span>
    </li>
    <li class="stages__item stage-3">
      <h3>
        <slot name="title3"></slot>
      </h3>
      <p>
        <slot name="text3"></slot>
      </p>
      <span class="arrow-bg dark light"></span>
      <span class="arrow-top"></span>
      <span class="arrow-bottom"></span>
      <span class="arrow dark light"></span>
    </li>
    <li class="stages__item stage-4">
      <h3>
        <slot name="title4"></slot>
      </h3>
      <p>
        <slot name="text4"></slot>
      </p>
      <span class="arrow-bg dark light"></span>
      <span class="arrow-top"></span>
      <span class="arrow-bottom"></span>
      <span class="arrow dark light"></span>
    </li>
    <li class="stages__item stage-5">
      <h3>
        <slot name="title5"></slot>
      </h3>
      <p>
        <slot name="text5"></slot>
      </p>
      <span class="arrow-bg dark light"></span>
      <span class="arrow-top"></span>
      <span class="arrow-bottom"></span>
      <span class="arrow dark light"></span>
    </li>
    <li class="stages__item stage-6">
      <h3>
        <slot name="title6"></slot>
      </h3>
      <p>
        <slot name="text6"></slot>
      </p>
      <span class="arrow-bg dark light"></span>
      <span class="arrow-top"></span>
      <span class="arrow-bottom"></span>
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
  width: 40px;
  height: 100%;
  background: center/ 100% url('~assets/img/arrow.png') no-repeat;
}
.stages-ads {
  & .arrow.dark {
    background: center/cover url('~assets/img/arrow-dark.png');
  }
  .stage-4,
  .stage-5 {
    & > .arrow {
      top: 50%;
      &.dark {
        background: center/cover url('~assets/img/arrow-dark-left.png');
      }
    }
  }

  & .arrow-bg.dark {
    background: linear-gradient(-45deg, #45484b -50%, #323436 100%);
    border: 1px solid #3c3f42;
    box-shadow: 12px 12px 58px rgba(0, 0, 0, 0.74),
      -12px -12px 32px rgba(195, 200, 205, 0.12);
  }
}
.stages-social {
  & .arrow.light {
    background: center/cover url('~assets/img/arrow-light.png');
  }
  .stage-4,
  .stage-5 {
    & > .arrow {
      top: 50%;
      &.light {
        background: center/cover url('~assets/img/arrow-light-left.png');
      }
    }
  }

  & .arrow-bg.light {
    background: linear-gradient(90deg, #bebebe -50%, #ffffff 100%);
    border: 1px solid rgb(255, 255, 255);
    box-shadow: -12px -12px 20px rgb(255, 255, 255),
      5px 5px 30px rgba(0, 0, 0, 0.274);
  }
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
    padding: 15px;
    position: relative;
    box-shadow: $shadow-out;

    border-radius: 10px;
    .arrow-bg {
      content: '';
      display: block;
      position: absolute;
      width: 60px;
      height: 60px;
      right: -80px;
      transform: translateY(-50%);

      filter: blur(2px);
      border-radius: 93px;
      //#3c3f42
    }
    .arrow {
      display: block;
      position: absolute;
      width: 50px;
      height: 50px;
      right: -77px;
      transform: translateY(-50%);
    }
  }
}

.stage-1 {
  & > .arrow-bg {
    top: 50%;
  }
  & > .arrow {
    top: 50%;
  }
}
.stage-2 {
  & > .arrow-bg {
    top: 50%;
  }
  & > .arrow {
    top: 50%;
  }
}
.stage-3 {
  & > .arrow-bg {
    bottom: -115px;

    left: calc(50% - 30px);
  }
  & > .arrow {
    bottom: -80px;

    left: calc(50% - 25px);
    transform-origin: center;
    transform: rotate(90deg);
  }
}
.stage-4 {
  & > .arrow-bg {
    top: 50%;
  }
  & > .arrow {
    top: 50%;
  }
}
.stage-5 {
  & > .arrow-bg {
    top: 50%;
  }
  & > .arrow {
    top: 50%;
  }
}
.stage-6 > .arrow-bg {
  display: none;
}
</style>
