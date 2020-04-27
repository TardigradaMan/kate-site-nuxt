export const actions = {
  // Поддержание сессии в nuxt
  nuxtServerInit({ dispatch }) {
    dispatch('auth/autoLogin')
  }
}
