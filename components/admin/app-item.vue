<template>
  <tr>
    <td>{{ app.date | date }}</td>
    <td>{{ app.name }}</td>
    <td>{{ app.phone }}</td>
    <td>{{ app.email }}</td>
    <td>{{ app.method }}</td>
    <td>
      <a v-if="app.urlAdd" :href="app.urlAdd">Ссылка</a>
      <p v-else>Ничего нет</p>
    </td>
    <td>
      <a v-if="app.urlSocial" :href="app.urlSocial">Ссылка</a>
      <p v-else>Ничего нет</p>
    </td>
    <td class="table__column--button">
      <button class="table__button table__button--mark">
        О</button
      ><button @click="remove" class="table__button table__button--del">
        У
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['app'],
  methods: {
    remove(app) {
      this.$emit('confirmDelete', app)
    }
  }
}
</script>

<style lang="scss" scoped>
.table__button {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin: 5px;
  border: none;
}

.table__button--mark {
  background-color: rgb(96, 241, 59);
}

.table__button--del {
  background-color: rgb(245, 48, 48);
}
</style>
