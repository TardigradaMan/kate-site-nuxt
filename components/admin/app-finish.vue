<template>
  <div>
    <h1>Выполненные</h1>
    <div v-if="applications.performed">
      <table class="table" border="1">
        <tbody>
          <tr>
            <th>Дата 2</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Метод связи</th>
            <th>Товар/Услуга</th>
            <th>Социальная сеть</th>
          </tr>
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
            <td><button>Отметить</button><button>Удалить</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>Выполненных нет</div>
  </div>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    applications: Array
  }
}
</script>
