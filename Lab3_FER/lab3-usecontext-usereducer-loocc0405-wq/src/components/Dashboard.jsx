import { Card, Badge, Button } from 'react-bootstrap'
import { useAuth } from '../hooks/useAuth'

function Dashboard({ hideLogout = false }) {
  const { state, dispatch } = useAuth()
  const { user } = state

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  if (!user) return null

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: '500px' }}>
      <Card.Header className="bg-primary text-white text-center">
        {user.name}
      </Card.Header>
      <Card.Body className="text-center">
        <p>
          Role: <Badge bg={user.role === 'admin' ? 'danger' : 'success'}>{user.role}</Badge>
        </p>
        {!hideLogout && (
          <Button variant="outline-danger" onClick={handleLogout}>
            Đăng xuất
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default Dashboard
