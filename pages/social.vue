<template>
  <div>
    <section class="social">
      <h1>Соц группы</h1>
      <app-list v-bind:news="news"></app-list>
    </section>
  </div>
</template>
<script>
import AppList from '@/components/main/List'

export default {
  components: { AppList },
  data() {
    return {
      news: {
        title: 'Дучшие новости',
        text: 'Тект лучших новостей'
      }
    }
  },
  created() {
    console.log('Значение news:', this.news)
  }
}
</script>
<style lang="scss" scoped>
h1 {
  padding-top: 100px;
}
responsive-nav {
  padding-top: 200px;
}
</style>
