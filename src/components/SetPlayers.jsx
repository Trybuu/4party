import { useRef, useState } from 'react'
import classes from './SetPlayers.module.scss'
import Input from '../ui/inputs/Input'
import ErrorMessage from '../ui/error/ErrorMessage'

export default function SetPlayers() {
  const [players, setPlayers] = useState({
    Marek: {
      id: 0,
      name: 'Marek',
      score: 0,
    },
    Julka: {
      id: 1,
      name: 'Julka',
      score: 0,
    },
  })

  const [isPlayerExist, setIsPlayerExist] = useState(false)

  const input = useRef()

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

    const playerValues = Object.values(players)
    console.log(playerValues)

    playerValues.forEach((player) => {
      console.log(`${player.name} ma wynik ${player.score} i id ${player.id}`)
    })
  }

  return (
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

      <div className={classes.players}>
        {Object.values(players).map((player) => (
          <Input key={player.id}>
            <input type="text" value={player.name} disabled />
            <button>-</button>
            <button>Edit</button>
          </Input>
        ))}
      </div>
    </div>
  )
}

// import { useRef, useState } from 'react'
// import classes from './SetPlayers.module.scss'
// import Input from '../ui/inputs/Input'
// import ErrorMessage from '../ui/error/ErrorMessage'

// export default function SetPlayers() {
//   let players = [
//     {
//       id: 87429387,
//       name: 'Marek',
//       score: 0,
//     },
//     {
//       id: 87429322,
//       name: 'Julka',
//       score: 0,
//     },
//   ]

//   const [isPlayerExist, setIsPlayerExist] = useState(false)

//   const input = useRef()

//   function handleAddPlayer() {
//     const playerName = input.current.value

//     // Chceck if player name exist
//     const isExist = players.filter((player) => player.name === playerName)

//     if (isExist.length > 0) {
//       setIsPlayerExist(true)
//       input.current.value = ''
//       input.current.focus()
//       return
//     } else {
//       setIsPlayerExist(false)

//       const player = {
//         id: Math.floor(Math.random() * 1000000),
//         name: playerName,
//         score: 0,
//       }

//       players.push(player)

//       input.current.value = ''
//       input.current.focus()
//     }
//   }

//   return (
//     <div>
//       <Input>
//         <input
//           ref={input}
//           type="text"
//           placeholder="Nazwa gracza"
//           maxLength={16}
//         />
//         <button onClick={handleAddPlayer}>+</button>
//       </Input>
//       <ErrorMessage
//         error={
//           isPlayerExist === true
//             ? 'Gracz o podanej nazwie już istnieje!'
//             : undefined
//         }
//       />
//     </div>
//   )
// }
