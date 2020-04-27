import Cookie from 'cookie' // Для парсинга
import Cookies from 'js-cookie' // Для изменения
import jwtDecode from 'jwt-decode' // Для расшифровки jwt токена (для проверки)

export const state = () => ({
  // Токен для проверки авторизации
  token: null
})

export const mutations = {
  // передаем токен в State
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}
export const actions = {
  async login({ commit, dispatch }, formLogin) {
    try {
      const { token } = await this.$axios.$post(
        '/api/auth/admin/login',
        formLogin
      )

      // Вызываем action для изменения token
      dispatch('setToken', token)
    } catch (error) {
      console.log(error)
    }
  },
  async createUser({ commit, dispatch }, formData) {
    try {
      await this.$axios.$post('/api/auth/admin/create', formData)
    } catch (error) {
      console.log(error)
    }
  },
  // Изменнение токена в state (в cookies)
  setToken({ commit }, token) {
    // Из плагина @nuxt/axios
    this.$axios.setToken(token, 'Bearer')
    commit('setToken', token)
    // Cookie
    Cookies.set('jwt-token', token)
  },
  logout({ commit }) {
    this.$axios.setToken(false)
    commit('clearToken')
    Cookies.remove('jwt-token')
  },
  autoLogin({ dispatch }) {
    // localstorage нельзя, из-за SSR
    // Нужны Cookie (они хранятся так же и на сервере)
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']

    if (isJwtValid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
  token: state => state.token
}

// Проверка token
function isJwtValid(token) {
  if (!token) {
    return false
  }
  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0
  return new Date().getTime() / 1000 < expires
}
