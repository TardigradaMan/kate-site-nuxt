<template>
  <div class="admin">
    <nav-admin v-if="showNavAdmin" class="nav"></nav-admin>
    <main class="main__admin"><nuxt /></main>
  </div>
</template>

<script>
import navAdmin from '@/components/admin/navAdmin'
export default {
  components: {
    navAdmin
  },
  data() {
    return {
      showNavAdmin: true
    }
  }
}
</script>

<style lang="scss" scoped>
.admin {
  display: flex;
  width: 100%;
  height: 100vh;
}

.nav {
  background-color: rgb(51, 50, 54);
  width: 260px;
  flex-shrink: 0;
  border-right: solid 1px #e6e6e6;
}

.main__admin {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  flex-shrink: 1;
  padding: 20px;
  background-color: $bg-color;
}
</style>
