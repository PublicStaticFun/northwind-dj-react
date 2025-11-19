import { create } from "zustand"
import client from "../api/client"

type TableResponse = Record<string, any> | Record<string, any>[]

interface State {
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
      // endpoint siempre en minúsculas
      const res = await client.get<TableResponse>(
        `/${currentTable.toLowerCase()}/`
      )

      let payload: any = res.data

      // Caso: API paginada DRF -> results
      if (res.data && typeof res.data === "object" && "results" in res.data) {
        payload = (res.data as any).results
      }

      // Validar que payload sea un array
      if (!Array.isArray(payload)) {
        console.warn("⚠️ API no devolvió un array, ignorando:", payload)
        payload = []
      }

      set({ data: payload, loading: false })
    } catch (err: any) {
      console.error("Error al cargar tabla:", err)
      set({
        error: err?.message || "Error loading table",
        loading: false,
      })
    }
  },
}))
