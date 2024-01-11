import classes from './GameCard.module.scss'

export default function GameCard({ children }) {
  return <button className={classes['game-card']}>{children}</button>
}
