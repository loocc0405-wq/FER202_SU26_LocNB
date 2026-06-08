import { Navbar, Container, Button } from 'react-bootstrap'
import { useAuth } from '../hooks/useAuth'

function AppNavbar() {
  const { state, dispatch } = useAuth()
  const { user } = state

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  if (!user) return null

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Login App</Navbar.Brand>
        <Navbar.Text className="me-3">
          Xin chào, {user.name}
        </Navbar.Text>
        <Button variant="outline-light" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
