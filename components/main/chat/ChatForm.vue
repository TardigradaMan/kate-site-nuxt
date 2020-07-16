<template>
  <input
    v-model="text"
    @keydown.enter="send"
    placeholder="Введите ваш вопрос"
    class="chat__input"
  />
</template>
<script>
export default {
  data: () => ({
    text: ''
  }),
  methods: {
    async send() {
      try {
        const message = {
          user: 'user',
          text: this.text
        }
        await this.$store.dispatch('chat/createMessage', message)
        this.text = ''
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.chat__input {
  min-width: 100%;
  margin: 0;

  // min-width: 390px;
  height: 50px;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 40px;
  border-radius: 8px;
  border: 0;
  background: #eee;
  font-size: 14px;
  line-height: 22px;
  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.35),
    inset -6px -6px 10px 0 white;
}
</style>
