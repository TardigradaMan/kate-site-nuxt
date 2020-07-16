<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header"> </slot>
          </div>

          <div class="modal__body">
            <slot :app="app" name="body"><h3></h3></slot>
          </div>

          <div class="modal__footer">
            <slot name="footer">
              <button
                @click="onConfirm"
                class="modal__button modal__button--confirm"
              >
                ДА
              </button>
              <button
                @click="onCancel"
                class="modal__button modal__button--cancel"
              >
                НЕТ
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['app'],
  data() {
    return {}
  },

  methods: {
    onConfirm() {
      this.$emit('confirm')
    },
    onCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal__container {
  width: 300px;
  margin: 0 auto;
  padding: 20px 20px;
  text-align: center;
  background-color: rgb(66, 66, 66);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.507);
  transition: all 0.3s ease;
}

.modal__body {
  margin: 20px 0;
}

.modal__button {
  width: 50px;
  height: 20px;
  border-radius: 10px;
  border: none;
  margin-left: 15px;
  margin-right: 15px;
  color: white;
}

.modal__button--confirm {
  background-color: rgb(218, 60, 60);
}

.modal__button--cancel {
  background-color: rgb(53, 219, 89);
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal__enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
