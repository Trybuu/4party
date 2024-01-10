import { Outlet, useNavigate } from 'react-router-dom'

import Card from '../ui/card/Card'
import Content from '../ui/content/Content'
import Logo from '../ui/logo/Logo'
import Wrapper from '../ui/wrapper/Wrapper'
import { useEffect } from 'react'

export default function WelcomeLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'))

    if (activeUser) {
      navigate('/setplayers')
    }
  }, [])

  return (
    <Wrapper>
      <Content>
        <Logo />
        <p className="text-center">
          To aplikacja, którą możecie wykorzystać w celu urozmaicenia zabawy,
          będąc na imprezie w gronie znajomych. Bawcie się dobrze!
        </p>
      </Content>
      <Card>
        <Outlet />
      </Card>
    </Wrapper>
  )
}
