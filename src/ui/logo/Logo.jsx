import classes from './Logo.module.scss'

export default function Logo() {
  return (
    <p className={classes.logo}>
      <span className={classes.logo__headlight}>4</span>Party
    </p>
  )
}
