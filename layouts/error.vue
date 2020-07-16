<template>
  <div class="page-error"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-error {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 1000;
  background: $bg-color, center / cover no-repeat url('~assets/img/404.jpg');
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 777px) {
  .page-error {
    background-position: 0 0;
  }
}
</style>
