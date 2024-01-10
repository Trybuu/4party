import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Content from '../ui/content/Content'
import Nav from '../ui/nav/Nav'

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
      <Outlet />
    </Content>
  )
}
