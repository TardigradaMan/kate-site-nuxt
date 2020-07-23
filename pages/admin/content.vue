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
// import { mapState } from 'vuex'
export default {
  layout: 'admin',

  data() {
    return {
      skill: ''
    }
  },
  middleware: ['auth-admin'],
  // computed: {
  //   ...mapState({
  //     skills: state => state.content.sliderSkills
  //   })
  // },
  async asyncData({ store }) {
    const skills = await store.dispatch('content/fetchSkillAdmin')
    return { skills }
  },

  methods: {
    async onSubmit() {
      try {
        const formData = {
          skill: this.skill
        }

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
