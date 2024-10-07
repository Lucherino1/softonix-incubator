// Solution 1
import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('si-token')

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`
    }
    return config
  }
)

instance.interceptors.response.use(
  response => response.data,
  async error => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshToken = localStorage.getItem('ref-token')
        const response = await authService.refreshToken(refreshToken)

        const { setToken, setRefreshToken } = useAuthStore()
        setToken(response.access_token)
        setRefreshToken(response.refresh_token)

        instance.defaults.headers.common.Authorization = `Bearer ${response.access_token}`
        return instance(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem('si-token')
        localStorage.removeItem('ref-token')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)

export const useHttp = instance

// Solution 2

// import axios from 'axios'

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   headers: {
//     apikey: import.meta.env.VITE_API_KEY
//   }
// })

// const isTokenRefreshing = ref(false)

// instance.interceptors.request.use(
//   async config => {
//     const {
//       accessToken, refreshToken, setRefreshToken, setToken, logout, expiresAt, expiresIn,
//       setExpiredAtTime, setExpiredInTime
//     } = useAuthStore()

//     if (expiresIn) {
//       const nowInSeconds = Math.floor(Date.now() / 1000)
//       if (nowInSeconds > expiresAt - 10) {
//         if (!isTokenRefreshing.value && refreshToken) {
//           isTokenRefreshing.value = true
//           try {
//             const res = await authService.refreshToken(refreshToken)
//             setToken(res.access_token)
//             setRefreshToken(res.refresh_token)
//             setExpiredAtTime(res.expires_at)
//             setExpiredInTime(res.expires_in)
//             config.headers.authorization = `Bearer ${res.access_token}`
//           } catch (error) {
//             console.error(error.message)
//             alert('Session expired, please sing in to your account')
//             logout()
//           } finally {
//             isTokenRefreshing.value = false
//           }
//         }
//       }
//     }
//     if (accessToken) {
//       config.headers.authorization = `Bearer ${accessToken}`
//     }
//     return config
//   }
// )

// instance.interceptors.response.use(
//   res => res.data,
//   error => {
//     console.log(error)

//     const { logout } = useAuthStore()
//     if (error.response.status === 401) {
//       logout()
//     }

//     return Promise.reject(error)
//   }
// )

// export const useHttp = instance
