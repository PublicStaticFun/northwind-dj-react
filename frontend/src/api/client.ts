import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

if (!API_URL) {
  console.error("❌ VITE_API_URL no está definido en .env")
}

const client = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

client.interceptors.response.use(
  (res) => res,
  (error) => {
    // Si la respuesta trae HTML en vez de JSON
    if (error.response && typeof error.response.data === "string") {
      return Promise.reject(
        new Error(
          "Server returned non-JSON response: " +
          error.response.data.substring(0, 200)
        )
      )
    }
    return Promise.reject(error)
  }
)

export default client
