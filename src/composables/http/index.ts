import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  config => {
    const { accessToken } = useAuthStore()

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`
    }
    return config
  }
)

// instance.interceptors.response.use(
//   response => response.data, // Directly return successful responses.
//   async error => {
//     const originalRequest = error.config
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true // Mark the request as retried to avoid infinite loops.
//       try {
//         const refreshToken = localStorage.getItem('ref-token') // Retrieve the stored refresh token.
//         // Make a request to your auth server to refresh the token.
//         const response = await authService.refreshToken(refreshToken)
//         const { accessToken, refreshToken: newRefreshToken } = response.data
//         // Store the new access and refresh tokens.
//         localStorage.setItem('si-token', accessToken)
//         localStorage.setItem('ref-token', newRefreshToken)
//         // Update the authorization header with the new access token.
//         instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
//         return instance(originalRequest) // Retry the original request with the new access token.
//       } catch (refreshError) {
//         // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
//         console.error('Token refresh failed:', refreshError)
//         localStorage.removeItem('si-token')
//         localStorage.removeItem('ref-token')
//         window.location.href = '/login'
//         return Promise.reject(refreshError)
//       }
//     }
//     return Promise.reject(error) // For all other errors, return the error as is.
//   }
// )

instance.interceptors.response.use(
  response => response.data, // Directly return successful responses.
  async error => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true // Mark the request as retried to avoid infinite loops.
      try {
        const { refreshToken } = useAuthStore() // Retrieve the stored refresh token.
        // Make a request to your auth server to refresh the token.
        const response = await authService.refreshToken(refreshToken)
        const { accessToken, refreshToken: newRefreshToken } = response.data
        // Store the new access and refresh tokens.
        const { setToken, setRefreshToken } = useAuthStore()
        setToken(accessToken)
        setRefreshToken(newRefreshToken)
        // Update the authorization header with the new access token.
        instance.defaults.headers.common.Authorization = `Bearer ${accessToken}` // +++++
        return instance(originalRequest) // Retry the original request with the new access token.
      } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.error('Token refresh failed:', refreshError)
        const { logout } = useAuthStore()
        logout()
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)

export const useHttp = instance
