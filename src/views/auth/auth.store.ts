// Solution 1
import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('ref-token'))

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string) {
    refreshToken.value = token
    localStorage.setItem('ref-token', token)
  }

  async function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    localStorage.removeItem('ref-token')
    window.location.href = router.resolve(routeNames.login).href
  }

  async function register (payload: { email: string; password: string }) {
    return authService.register(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
        window.location.href = router.resolve(routeNames.contacts).href
      })
      .catch((error) => {
        console.error('Registration failed:', error)
      })
  }

  return {
    accessToken,
    refreshToken,
    login,
    logout,
    register,
    setToken,
    setRefreshToken
  }
})

// Solution 2

// import { routeNames, router } from '@/router'

// export const useAuthStore = defineStore('authStore', () => {
//   const accessToken = ref(localStorage.getItem('si-token'))
//   const refreshToken = ref(localStorage.getItem('ref-token'))
//   const expiresIn = ref(+localStorage.getItem('expires-in'))
//   const expiresAt = ref(+localStorage.getItem('expires-at'))

//   function setExpiredInTime (expires: number) {
//     expiresIn.value = expires
//     localStorage.setItem('expires-in', expires.toString())
//   }

//   function setExpiredAtTime (expires: number) {
//     expiresAt.value = expires
//     localStorage.setItem('expires-at', expires.toString())
//   }

//   function setToken (token: string) {
//     accessToken.value = token
//     localStorage.setItem('si-token', token)
//   }

//   function setRefreshToken (token: string) {
//     refreshToken.value = token
//     localStorage.setItem('ref-token', token)
//   }

//   function login (payload: ILoginRequest) {
//     return authService.login(payload)
//       .then((res) => {
//         setToken(res.access_token)
//         setRefreshToken(res.refresh_token)
//         setExpiredInTime(res.expires_in)
//         setExpiredAtTime(res.expires_at)
//       })
//   }

//   function logout () {
//     localStorage.removeItem('si-token')
//     localStorage.removeItem('ref-token')
//     localStorage.removeItem('expires-in')
//     localStorage.removeItem('expires-at')
//     window.location.href = router.resolve(routeNames.login).href
//   }

//   function register (payload: { email: string; password: string }) {
//     return authService.register(payload)
//       .then((res) => {
//         setToken(res.access_token)
//         setRefreshToken(res.refresh_token)
//         setExpiredInTime(res.expires_in)
//         setExpiredAtTime(res.expires_at)
//         window.location.href = router.resolve(routeNames.contacts).href
//       })
//       .catch((error) => {
//         console.error('Registration failed:', error)
//       })
//   }

//   return {
//     accessToken,
//     refreshToken,
//     login,
//     logout,
//     register,
//     setToken,
//     setRefreshToken,
//     setExpiredInTime,
//     setExpiredAtTime,
//     expiresAt,
//     expiresIn
//   }
// })
