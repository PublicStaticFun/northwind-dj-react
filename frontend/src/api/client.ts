import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL;

const client = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

// Interceptor para manejar respuestas que no son JSON (500 HTML, 404 pages, etc.)
client.interceptors.response.use(
  res => res,
  error => {
    // Si respuesta existe y no es JSON, dejar pasar el contenido como texto
    if (error.response && typeof error.response.data === 'string') {
      return Promise.reject(new Error(`Server responded with HTML/text: ${error.response.data.substring(0,200)}`))
    }
    return Promise.reject(error)
  }
)

export default client
