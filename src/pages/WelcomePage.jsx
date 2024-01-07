import Button from '../ui/buttons/Button'
import Card from '../ui/card/Card'
import Content from '../ui/content/Content'
import Logo from '../ui/logo/Logo'
import Wrapper from '../ui/wrapper/Wrapper'

import classes from './WelcomePage.module.scss'

export default function WelcomePage() {
  return (
    <Wrapper>
      <Content>
        <Logo />
        <p className={classes['text-center']}>
          To aplikacja, którą możecie wykorzystać w celu urozmaicenia zabawy,
          będąc na imprezie w gronie znajomych. Bawcie się dobrze!
        </p>
      </Content>
      <Card>
        <Button>Zaczynajmy</Button>
      </Card>
    </Wrapper>
  )
}
