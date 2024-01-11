import GameCard from '../ui/game-card/GameCard'
import classes from './HomePage.module.scss'

export default function HomePage() {
  return (
    <div className={classes['home-content']}>
      <GameCard>Kalambury</GameCard>
      <GameCard>Nigdy przenigdy</GameCard>
      <GameCard>Prawda czy wyzwanie</GameCard>
      <GameCard>Bitwa taneczna</GameCard>
      <GameCard>Rap bitwa</GameCard>
    </div>
  )
}
