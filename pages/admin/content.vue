<template>
  <div>
    <h1>Контент</h1>
    <form @submit.prevent="onSubmit">
      <label
        >Создать новою тему
        <input v-model.trim="skill" type="text" />
      </label>
      <button>Отправить</button>
    </form>

    <h2>Список умений</h2>
    <ul>
      <li v-for="app in skills" :key="app._id">{{ app.skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  data() {
    return {
      skill: ''
    }
  },
  middleware: ['auth-admin'],

  async asyncData({ store }) {
    const skills = await store.dispatch('content/fetchSkill')

    return { skills }
  },
  methods: {
    async onSubmit() {
      try {
        console.log('Зашел в метод компонента')

        const formData = {
          skill: this.skill
        }
        console.log(formData)

        await this.$store.dispatch('content/createSkill', formData)
        this.skill = ''
        this.loading = false
      } catch (e) {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  padding: 15px;
}
</style>
