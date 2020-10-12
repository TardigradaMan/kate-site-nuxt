<template>
  <li :class="priceItem.cardItemClass" class="card__item">
    {{ priceItem.title }}
  </li>
</template>

<script>
export default {
  props: {
    priceItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  &__item {
    position: relative;
    padding-left: 18px;

    &::before {
      position: absolute;
      left: -2px;
      content: '';
      display: inline-block;
      height: 15px;
      width: 15px;
      background-size: 15px;
      background-image: url('~assets/img/icon/off.png');
      background-repeat: no-repeat;
      margin-right: 10px;
      background-position: center center;
      vertical-align: middle;

      // @media (max-width: $lg-width-max) {
      //   // CSS для ширины от 992px до 1199px */
      //   font-size: 2.5em;
      // }

      @media (max-width: $md-width-max) {
        // CSS для ширины от 768px до 991px */
        height: 12px;
        width: 12px;
        background-size: 12px;
      }

      @media (max-width: $sm-width-max) {
        // CSS для ширины от 576px до 767px */
        font-size: 2.2em;
      }
    }
  }

  .ok::before {
    background-image: url('~assets/img/icon/ok.png');
  }

  .off::before {
    background-image: url('~assets/img/icon/off.png');
  }
}
</style>
