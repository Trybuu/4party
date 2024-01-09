import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayers: (state, action) => {
      const playersToAdd = action.payload

      console.log('ADD PLAYERS')
      console.log(playersToAdd)

      localStorage.setItem('players', JSON.stringify(playersToAdd))
    },
  },
})

export const { addPlayers } = playersSlice.actions

export default playersSlice.reducer
