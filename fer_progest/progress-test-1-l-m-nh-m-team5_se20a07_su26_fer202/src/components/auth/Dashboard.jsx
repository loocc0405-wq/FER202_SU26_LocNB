import { useAuth } from '../../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>🎉 Chào Mừng, {user.name}!</h2>

      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #ddd',
        }}
      >
        <h3>Thông Tin Tài Khoản</h3>

        <div style={{ marginBottom: '15px' }}>
          <strong>Tên:</strong> {user.name}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong>Email:</strong> {user.email}
        </div>

        <div>
          <strong>Vai Trò:</strong> {user.role}
        </div>
      </div>
    </div>
  )
}