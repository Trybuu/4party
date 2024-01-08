import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import WelcomeLayout from './layouts/WelcomeLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeLayout />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/home',
    element: <HomePage />,
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
