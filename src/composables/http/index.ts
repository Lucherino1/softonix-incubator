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
