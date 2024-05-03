import { combineReducers, configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import cartReducer from './reducers/cart'

const rootReducer = combineReducers({
  cart: cartReducer,
  [api.reducerPath]: api.reducer
})

export function configuratedStore(preloadedState?: RootState) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configuratedStore>
