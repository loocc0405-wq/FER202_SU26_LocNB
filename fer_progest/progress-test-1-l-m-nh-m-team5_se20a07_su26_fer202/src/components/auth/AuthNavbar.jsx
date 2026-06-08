/**
 * AuthNavbar.jsx – Thanh điều hướng hiển thị thông tin đăng nhập (Bài 2)
 */
import { useAuth } from '../../context/AuthContext'

export default function AuthNavbar() {
  const { user, logout } = useAuth()

  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <h3 style={{ margin: 0 }}>Login App</h3>
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '14px' }}>
            👋 Xin chào, <strong>{user.name}</strong>
          </span>
          <button
            onClick={logout}
            style={{
              padding: '8px 15px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Đăng Xuất
          </button>
        </div>
      ) : (
        <span style={{ color: '#666' }}>Chưa đăng nhập</span>
      )}
    </nav>
  )
}
