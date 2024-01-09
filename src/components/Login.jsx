import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logIn } from '../features/auth/authSlice'

import classes from './Login.module.scss'

export default function Login() {
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  const [isAnySubmit, setIsAnySubmit] = useState(0)

  useEffect(() => {
    if (user.isLoggedIn === true) {
      navigate('/setplayers')
    }
  }, [user.isLoggedIn])

  function handleSubmit(event) {
    event.preventDefault()

    setIsAnySubmit((prev) => prev + 1)

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    dispatch(logIn({ userName: data.userName, password: data.password }))
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
          {user.isLoggedIn === false && isAnySubmit > 0 ? (
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
