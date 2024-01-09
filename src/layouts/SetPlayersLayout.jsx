import { Outlet } from 'react-router-dom'
import Content from '../ui/content/Content'
import Logo from '../ui/logo/Logo'
import Wrapper from '../ui/wrapper/Wrapper'
import Card from '../ui/card/Card'

export default function SetPlayersLayout() {
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
