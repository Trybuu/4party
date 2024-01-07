import Logo from '../ui/logo/Logo'

import classes from './WelcomePage.module.scss'

export default function WelcomePage() {
  return (
    <>
      <header className={classes.header}>
        <Logo />
        <p className={classes['text-center']}>
          To aplikacja, którą możecie wykorzystać w celu urozmaicenia zabawy,
          będąc na imprezie w gronie znajomych. Bawcie się dobrze!
        </p>
      </header>
    </>
  )
}
