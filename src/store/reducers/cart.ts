import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Product[]
  quantities: Record<number, number>
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  quantities: {},
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === id
      )

      if (existingProductIndex === -1) {
        state.items.push(action.payload)
        state.quantities[id] = 1
      } else {
        state.quantities[id] += 1
      }
    },
    subtract: (state, action: PayloadAction<number>) => {
      const id = action.payload
      if (state.quantities[id] > 0) {
        state.quantities[id] -= 1
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const id = action.payload

      state.items = state.items.filter((item) => item.id !== id)
      delete state.quantities[id]
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, subtract, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
