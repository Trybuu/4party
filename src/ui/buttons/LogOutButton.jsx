import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

import classes from './LogOutButton.module.scss'

export default function LogOutButton() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  function handleLogOut() {
    console.log('Log out!')
    console.log(user)

    dispatch(logOut())
    navigate('/')
  }

  return (
    <button className={classes.button} onClick={handleLogOut}>
      Wyloguj
    </button>
  )
}
