import GameCard from '../ui/game-card/GameCard'
export default function HomePage() {
  return (
    <>
      <GameCard navTo="charades">Kalambury</GameCard>
      <GameCard navTo="charades">Nigdy przenigdy</GameCard>
      <GameCard navTo="charades">Prawda czy wyzwanie</GameCard>
      <GameCard navTo="charades">Bitwa taneczna</GameCard>
      <GameCard navTo="charades">Rap bitwa</GameCard>
    </>
  )
}
