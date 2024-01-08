import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../features/auth/authSlice'

import classes from './Login.module.scss'

export default function Login() {
  const [authStatus, setAuthStatus] = useState('') // '', 'failed', 'succes'

  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    dispatch(logIn({ userName: data.userName, password: data.password }))

    if (!user.isLogin) {
      setAuthStatus('failed')
    } else {
      setAuthStatus('succes')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="text"
          id="userName"
          name="userName"
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

        <p className={classes.form__error}>
          {authStatus === 'failed' ? (
            <span>Błędna nazwa użytkownika lub hasło</span>
          ) : (
            ''
          )}
        </p>

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
