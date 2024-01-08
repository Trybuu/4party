import { Link } from 'react-router-dom'

import Button from '../ui/buttons/Button'

export default function WelcomePage() {
  return (
    <Link to="login">
      <Button>Zaczynajmy</Button>
    </Link>
  )
}
