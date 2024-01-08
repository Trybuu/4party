import { createSlice } from '@reduxjs/toolkit'

// Dummy data
import { users } from '../../../data/users'

const initialState = {
  user: {
    id: '',
    userName: '',
    password: '',
    isLogin: false,
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, payload) => {
      const userToCheck = payload.payload

      const [userFound] = [
        ...users.filter((user) => user.userName === userToCheck.userName),
      ]

      const isExist =
        userFound === undefined ? [] : Object.keys(userFound).length !== 0

      if (
        !isExist &&
        userFound.userName !== userToCheck.userName &&
        userFound.password !== userToCheck.password
      ) {
        console.log('User not exist')
        return
      }

      state.user = {
        id: userToCheck.userName,
        userName: userToCheck.userName,
        password: userToCheck.password,
        isLogin: true,
      }

      alert(`
        ${state.user.id}
        ${state.user.userName}
        ${state.user.password}
        ${state.user.isLogin}
        `)
    },
  },
})

export const { logIn } = authSlice.actions

export default authSlice.reducer
