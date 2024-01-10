import classes from './Logo.module.scss'

export default function Logo({ size = '' }) {
  return (
    <p className={`${classes.logo} ${classes[`logo--${size}`]}`}>
      <span className={classes.logo__headlight}>4</span>Party
    </p>
  )
}
