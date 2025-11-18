import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import DataTable from '../components/DataTable'
import { useParams } from 'react-router-dom'
import { useTableStore } from '../store/useTableStore'

export default function Home() {
  const { table } = useParams<{ table?: string }>()
  const setTable = useTableStore(s => s.setTable)
  const loadTable = useTableStore(s => s.loadTable)

  // Si llegamos con ruta /Products, seteamos y cargamos
  useEffect(() => {
    if (table) {
      setTable(table)
      loadTable()
    }
  }, [table])

  // también podrías observar cambios de currentTable en el store y llamar loadTable

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1 }}>
        <DataTable />
      </main>
    </div>
  )
}
