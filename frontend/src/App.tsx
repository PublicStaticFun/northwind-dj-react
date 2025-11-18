import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:table" element={<Home />} />
      {/* puedes añadir rutas privadas o pages aquí */}
    </Routes>
  )
}
