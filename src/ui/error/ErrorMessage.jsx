import classes from './ErrorMessage.module.scss'

export default function ErrorMessage({ error }) {
  return (
    <div className={classes.error}>
      <p className={classes.error__message}>{error}</p>
    </div>
  )
}
