import { createSlice } from '@reduxjs/toolkit'

// Dummy data
import { users } from '../../../data/users'

const initialState = {
  user: {
    id: '',
    userName: '',
    password: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.user = {
        id: 0,
        userName: 'Marek',
        password: 'Marek123',
      }
    },
  },
})

export const { logIn } = authSlice.actions

export default authSlice.reducer
