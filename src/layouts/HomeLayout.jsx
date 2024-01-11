import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Content from '../ui/content/Content'
import Nav from '../ui/nav/Nav'

import classes from './HomeLayout.module.scss'

export default function HomeLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem('activeUser'))
    if (userLoggedIn.isLoggedIn === false || userLoggedIn === null) {
      console.log('Niezalogowany!')
      navigate('/login')
    } else if (userLoggedIn.isLoggedIn === true) {
      console.log('Zalogowano')
    }
  }, [])

  return (
    <Content>
      <Nav />
      <div className={classes['home-content']}>
        <Outlet />
      </div>
    </Content>
  )
}
