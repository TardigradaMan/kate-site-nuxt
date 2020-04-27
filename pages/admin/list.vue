<template>
  <div>
    <h1>Заявки</h1>
    <div v-if="applications.length">
      <table class="table" border="1">
        <caption></caption>
        <thead>
          <tr>
            <th>Дата 1</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Метод связи</th>
            <th>Товар/Услуга</th>
            <th>Социальная сеть</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="app in applications" :key="app._id">
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
              <button
                @click="showModal = true"
                class="table__button table__button--mark"
              >
                О</button
              ><button
                @click="remove(app._id)"
                class="table__button table__button--del"
              >
                У
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>Заявок нет</div>
    <app-modal v-if="showModal" @close="showModal = false">
      <h1 slot="header">Заголовок модального окна</h1>
    </app-modal>
  </div>
</template>

<script>
import AppModal from '@/components/admin/modal'
export default {
  layout: 'admin',
  components: {
    AppModal
  },

  data() {
    return {
      showModal: false
    }
  },
  middleware: ['auth-admin'],

  async asyncData({ store }) {
    const applications = await store.dispatch('applications/fetchApplications')

    return { applications }
  },
  methods: {
    async remove(id) {
      try {
        await this.$store.dispatch('applications/remove', id)
        this.applications = this.applications.filter(a => a._id !== id)
      } catch (e) {}
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid rgb(82, 81, 82);

  box-shadow: $shadow;
  background-color: $bg-color;

  font-size: 14px;
}
thead th:nth-child(1) {
  width: 10%;
}

thead th:nth-child(2) {
  width: 15%;
}

thead th:nth-child(3) {
  width: 10%;
}

thead th:nth-child(4) {
  width: 15%;
}
thead th:nth-child(5) {
  width: 15%;
}
thead th:nth-child(6) {
  width: 15%;
}
thead th:nth-child(7) {
  width: 12%;
}

thead th:nth-child(8) {
  width: 8%;
}

th,
td {
  padding: 2px;
}

thead th,
tfoot th {
  font-size: 15px;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

thead {
  // background-color: $bg-color;
  color: white;
  text-shadow: 1px 1px 1px black;
}

tbody tr:nth-child(odd) {
  background-color: #423f47;
}

tbody tr:nth-child(even) {
  background-color: $bg-color;
}

a {
  text-decoration: none;
  color: #4e59d3;
}
// .table__column--button {
//   display: flex;
//   flex-flow: column wrap;
// }

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
