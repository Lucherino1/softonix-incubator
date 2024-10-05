import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    window.location.href = router.resolve(routeNames.login).href
  }

  function register (payload: ILoginPayload) {
    return authService.register(payload)
  }

  return {
    accessToken,
    login,
    logout,
    register
  }
})
