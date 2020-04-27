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
          <app-item
            v-for="app in applications"
            :key="app._id"
            :app="app"
            @confirmDelete="confirmDelete(app)"
            class="table__item"
          ></app-item>
        </tbody>
      </table>
    </div>
    <div v-else>Заявок нет</div>
    <app-modal
      :app="selectedApp"
      v-if="confirmModal"
      @cancel="cancelDelete"
      @confirm="deleteApp(selectedApp._id)"
    >
      <template v-slot:header>
        <h3>Вы точно хотить удалить заявку?!</h3>
      </template>
      <template v-slot:body="appUser">
        <p>Клиент: {{ appUser.app.name }}</p>
      </template>
      <template v-slot:footer></template>
    </app-modal>
  </div>
</template>

<script>
import AppModal from '@/components/admin/modal'
import AppItem from '@/components/admin/app-item'
export default {
  layout: 'admin',
  components: {
    AppModal,
    AppItem
  },

  data() {
    return {
      confirmModal: false,
      selectedApp: null
    }
  },
  middleware: ['auth-admin'],

  async asyncData({ store }) {
    const applications = await store.dispatch('applications/fetchApplications')

    return { applications }
  },
  methods: {
    confirmDelete(app) {
      this.selectedApp = app
      this.confirmModal = true
    },
    cancelDelete() {
      this.confirmModal = false
      this.selectedApp = null
    },
    async deleteApp(id) {
      try {
        await console.log('Зашел в методы')

        console.log('Из deleteApp значение id :', id)
        this.confirmModal = false

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

.table__item {
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

.modal__header h3 {
  margin: 0;
  padding: 0;
}
</style>
