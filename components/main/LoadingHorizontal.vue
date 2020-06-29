<template>
  <div class="bubbles">
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
    <div class="bubble">
      <div class="circle"></div>
    </div>
  </div>

  <!-- //- .container //- .bubbles //- - for (var i = 0; i < 10; ++i) //- .bubble
    //- .circle
     -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.horizontal {
  max-width: 600px;

  margin: 0 auto;
  padding: 0;
  text-align: center;
}

.bubbles {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.bubble {
  display: inline-block;
  padding: 0px 5px;
  vertical-align: middle;

  @for $i from 1 to 11 {
    &:nth-of-type(#{$i}) .circle {
      animation-delay: $i * 0.1s;
    }
  }
}

.bubble .circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffffff;
  animation: pulse 1.5s infinite;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.2);
    opacity: 0.75;
  }
  100% {
    transform: scale(1);
  }
}
</style>
