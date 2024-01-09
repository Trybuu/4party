import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import playersReducer from '../features/players/playersSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    players: playersReducer,
  },
})
