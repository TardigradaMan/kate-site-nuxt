export default function({ $axios, redirect, store }) {
  // Хранение токена как на сервере так и на клиенте
  $axios.interceptors.request.use(request => {
    if (
      store.getters['auth/isAuthenticated'] &&
      !request.headers.common.Authorization
    ) {
      // Добавление поля Authorization в Headers ответа
      const token = store.getters['auth/token']
      request.headers.common.Authorization = `Bearer ${token}`
    }

    return request
  })
  // Обработка ошибок @nuxt/axios
  $axios.onError(error => {
    if (error.response) {
      if (error.response.status === 401) {
        // Нужно настроить ошибку время сессии истекло
        redirect('/admin/login?message=session')
        store.dispatch('auth/logout')
      }
      if (error.response.status === 500) {
        console.error('Server 500 error')
      }
    }
  })

  // Обработка ошибок
  // $axios.onResponse(response => {
  //   console.log(`[${response.status}] ${response.request.path}`)
  // })

  $axios.onError(err => {
    console.log(
      `[${err.response && err.response.status}] ${err.response &&
        err.response.request.path}`
    )
    console.log(err.response && err.response.data)
  })
}
