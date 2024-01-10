import Logo from '../logo/Logo'
import LogOutButton from '../buttons/LogOutButton'

import classes from './Nav.module.scss'

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <Logo size="small" />
      <LogOutButton />
    </nav>
  )
}
