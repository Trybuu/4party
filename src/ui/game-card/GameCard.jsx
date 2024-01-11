import { useNavigate } from 'react-router-dom'
import classes from './GameCard.module.scss'

export default function GameCard({ children, navTo }) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`${navTo}`)
  }

  return (
    <button onClick={handleClick} className={classes['game-card']}>
      {children}
    </button>
  )
}
