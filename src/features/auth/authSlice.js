import { createSlice } from '@reduxjs/toolkit'

// Dummy data
import { users } from '../../../data/users'

const initialState = {
  user: {
    id: '',
    userName: '',
    password: '',
    isLoggedIn: false,
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const userToCheck = action.payload

      const [userFound] = [
        ...users.filter((user) => user.userName === userToCheck.userName),
      ]

      const isExist =
        userFound === undefined ? [] : Object.keys(userFound).length !== 0

      if (
        isExist &&
        userFound.userName === userToCheck.userName &&
        userFound.password === userToCheck.password
      ) {
        state.user = {
          id: userToCheck.userName,
          userName: userToCheck.userName,
          password: userToCheck.password,
          isLoggedIn: true,
        }

        localStorage.setItem('activeUser', {
          id: state.user.id,
          userName: state.user.userName,
        })
      } else {
        state.user.isLoggedIn = false
        return
      }
    },
  },
})

export const { logIn } = authSlice.actions

export default authSlice.reducer
