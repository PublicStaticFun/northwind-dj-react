import { Menu } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useTableStore } from '../store/useTableStore'

const items = [
  { key: 'Products', label: 'Products' },
  { key: 'Categories', label: 'Categories' },
  { key: 'Customers', label: 'Customers' },
  { key: 'Orders', label: 'Orders' },
  { key: 'Suppliers', label: 'Suppliers' },
  { key: 'Employees', label: 'Employees' },
  { key: 'Shippers', label: 'Shippers' },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const setTable = useTableStore(s => s.setTable)
  const { table } = useParams<{ table?: string }>()
  const selectedKey = table ?? null

  function onSelect({ key }: { key: string }) {
    setTable(key)
    navigate(`/${key}`)
  }

  return (
    <aside style={{ width: 250, height: '100vh', paddingTop: 16, background: 'rgba(0,0,0,0.25)', borderRight: '1px solid rgba(255,255,255,0.12)' }}>
      <Menu
        mode="inline"
        selectedKeys={selectedKey ? [selectedKey] : []}
        items={items}
        onSelect={onSelect}
        theme="dark"
      />
    </aside>
  )
}
