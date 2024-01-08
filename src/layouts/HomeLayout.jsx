import { Outlet } from 'react-router-dom'
import Content from '../ui/content/Content'

export default function HomeLayout() {
  return (
    <Content>
      <Outlet />
    </Content>
  )
}
