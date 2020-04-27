<template>
  <aside class="navigation">
    <nav class="nav">
      <ul class="nav_list">
        <li class="nav__item">
          <span>Ик</span>
          <nuxt-link exact to="/admin" class="nav__link">Админ</nuxt-link>
        </li>

        <li class="nav__item">
          <span>Ик</span>
          <nuxt-link class="nav__link" to="/admin/list">Заявки</nuxt-link>
        </li>
        <li class="nav__item">
          <span>Ик</span>
          <nuxt-link class="nav__link" to="/admin/users"
            >Создать пользователя</nuxt-link
          >
        </li>
        <li class="nav__item">
          <span>Ик</span>
          <nuxt-link class="nav__link" to="/">Главная</nuxt-link>
        </li>
        <li class="nav__item">
          <span>Ик</span>
          <nuxt-link class="nav__link" to="/admin/login"
            >Войти в систему</nuxt-link
          >
        </li>

        <li class="nav__item">
          <span>Ик</span>
          <nuxt-link to="/admin/logout" class="nav__link"
            >Выйти из системы</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav_list {
  height: 100%;

  list-style: none;
  position: relative;
  margin: 0;
  padding-top: 20px;
  padding-left: 10px;

  .nav__link {
    padding-left: 20px;

    font-size: 14px;
    color: #e3e7ee;
    padding: 0 20px;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;

    transition: border-color 0.3s, background-color 0.3s, color 0.3s;

    height: 56px;
    line-height: 40px;
    position: relative;
    white-space: nowrap;
    list-style: none;
    &:hover,
    :focus {
      font-size: 15px !important;
      transition: font-size 0.2s;
    }
  }
}

.nuxt-link-exact-active {
  // font-size: 15px !important;

  color: rgb(3, 85, 238) !important;
}
</style>
