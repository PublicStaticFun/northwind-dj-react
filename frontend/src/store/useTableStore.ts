import { create } from 'zustand'
import client from '../api/client'

type State = {
  currentTable: string | null
  data: any[]
  loading: boolean
  error: string | null
  setTable: (t: string) => void
  loadTable: () => Promise<void>
}

export const useTableStore = create<State>((set, get) => ({
  currentTable: null,
  data: [],
  loading: false,
  error: null,

  setTable: (t) => set({ currentTable: t, data: [], error: null }),

  loadTable: async () => {
    const { currentTable } = get()
    if (!currentTable) return
    set({ loading: true, error: null })
    try {
      // lowercase endpoint by convention: /products/
      const res = await client.get(`/${currentTable.toLowerCase()}/`)
      // si API devuelve estructura DRF paginada -> res.data.results
      const payload = res.data?.results ?? res.data
      set({ data: payload ?? [], loading: false })
    } catch (err: any) {
      console.error(err)
      set({ error: err.message || 'Error loading table', loading: false })
    }
  }
}))
