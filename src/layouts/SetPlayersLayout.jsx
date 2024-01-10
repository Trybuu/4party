import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Content from '../ui/content/Content'
import Logo from '../ui/logo/Logo'
import Wrapper from '../ui/wrapper/Wrapper'
import Card from '../ui/card/Card'

export default function SetPlayersLayout() {
  const navigate = useNavigate()
  const [players, setPlayers] = useState()

  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('players'))

    setPlayers(storedPlayers)
  }, [])

  useEffect(() => {
    if (players !== null && players !== undefined) {
      navigate('/home')
    }
  }, [players])

  return (
    <Wrapper>
      <Content>
        <Logo />
        <p className="text-center">Wpisz imiona graczy</p>
      </Content>
      <Card>
        <Outlet />
      </Card>
    </Wrapper>
  )
}
