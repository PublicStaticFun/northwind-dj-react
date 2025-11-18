import React, { useMemo } from 'react'
import { Table, Input, Space, Alert } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import { useTableStore } from '../store/useTableStore'

type Row = Record<string, any>

export default function DataTable() {
  const { data, loading, error } = useTableStore()
  const [search, setSearch] = React.useState('')

  // columnas auto generadas
  const columns: ColumnsType<Row> = useMemo(() => {
    if (!data || data.length === 0) return []
    return Object.keys(data[0]).map((key) => ({
      title: key,
      dataIndex: key,
      key
    }))
  }, [data])

  // filtrado
  const filtered = useMemo(() => {
    if (!search) return data
    const s = search.toLowerCase()
    return data.filter(r => JSON.stringify(r).toLowerCase().includes(s))
  }, [data, search])

  return (
    <div style={{ padding: 20 }}>
      {error && <Alert type="error" message="Error cargando datos" description={error} style={{ marginBottom: 12 }} />}
      <Space style={{ marginBottom: 12 }}>
        <Input
          size="small"                     // <- icono y input CHICO
          prefix={<SearchOutlined />}
          placeholder="Buscar..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: 280 }}
        />
      </Space>

      <div className="table-info">
        <Table
          dataSource={filtered}
          columns={columns}
          loading={loading}
          rowKey={(record) => record.id ?? JSON.stringify(record)} // ajusta 'id' según tus datos
          pagination={{ pageSize: 25 }}
          scroll={{ x: 'max-content' }}
        />
      </div>
    </div>
  )
}
