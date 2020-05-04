<template>
  <div>
    <app-home></app-home>
  </div>
</template>

<script>
import AppHome from '@/components/main/Home'

export default {
  components: {
    AppHome
  },
  data() {
    return {
      currentView: 'AppAd'
    }
  },
  methods: {
    switchView(view) {
      this.currentView = view
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  margin-top: 50px;
}
</style>
