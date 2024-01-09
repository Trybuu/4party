import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import classes from './SetPlayers.module.scss'
import Input from '../ui/inputs/Input'
import Button from '../ui/buttons/Button'
import ErrorMessage from '../ui/error/ErrorMessage'
import { addPlayers } from '../features/players/playersSlice'

// Dodać możliwość edytowania graczy po ich dodaniu
// Dodać możliwość usunięcia gracza
// Zapisać graczy w globalnym stanie i w localStorage

export default function SetPlayers() {
  const [players, setPlayers] = useState({})

  const playersData = useSelector((state) => state.players.players)
  const dispatch = useDispatch()

  const [isPlayerExist, setIsPlayerExist] = useState(false)

  const input = useRef()

  const navigate = useNavigate()

  function handleAddPlayer() {
    const playerName = input.current.value

    if (players[playerName]) {
      setIsPlayerExist(true)
      input.current.value = ''
      input.current.focus()
      return
    } else {
      setIsPlayerExist(false)

      const newPlayers = { ...players }
      const player = {
        id: Object.keys(players).length,
        name: playerName,
        score: 0,
      }

      newPlayers[playerName] = player
      setPlayers(newPlayers)

      input.current.value = ''
      input.current.focus()
    }
  }

  function handlePlayersReady() {
    dispatch(addPlayers(players))
    navigate('/home')
  }

  return (
    <div className={classes['max-width']}>
      <div>
        <Input>
          <input
            ref={input}
            type="text"
            placeholder="Nazwa gracza"
            maxLength={16}
          />
          <button onClick={handleAddPlayer}>+</button>
        </Input>
        <ErrorMessage
          error={
            isPlayerExist === true
              ? 'Gracz o podanej nazwie już istnieje!'
              : undefined
          }
        />
      </div>

      <div className={classes.players}>
        {Object.values(players).map((player) => (
          <Input key={player.id}>
            <input type="text" value={player.name} disabled />
            <button>-</button>
            <button>Edit</button>
          </Input>
        ))}
      </div>

      <div className={classes.ready}>
        {Object.values(players).length >= 2 ? (
          <Button onClick={handlePlayersReady}>Gotowi</Button>
        ) : undefined}
      </div>
    </div>
  )
}
