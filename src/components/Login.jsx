import classes from './Login.module.scss'

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nazwa użytkownika"
          className={classes.form__input}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Hasło"
          className={classes.form__input}
        />

        <button type="submit" className={classes.form__button}>
          Zaloguj
        </button>
      </form>

      <p className={classes['no-registered']}>
        New to 4party?{' '}
        <button className={classes['no-registered__button']}>Register</button>
      </p>
    </>
  )
}
