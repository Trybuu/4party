import { useState } from 'react'
import CharadesRules from '../components/CharadesRules'

export default function CharadesPage() {
  const [gameStatus, setGameStatus] = useState()

  return <CharadesRules />
}
