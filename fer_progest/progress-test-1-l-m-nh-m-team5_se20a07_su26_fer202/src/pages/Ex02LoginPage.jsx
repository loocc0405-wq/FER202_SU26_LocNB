/**
 * Ex02LoginPage.jsx – Trang bài 2: Login Form
 */
import { AuthProvider, useAuth } from '../context/AuthContext'
import AuthNavbar from '../components/auth/AuthNavbar'
import LoginForm from '../components/auth/LoginForm'
import Dashboard from '../components/auth/Dashboard'

function PageContent() {
  const { user } = useAuth()
  return (
    <div>
      <AuthNavbar />
      <div style={{ paddingTop: '20px' }}>
        {user ? <Dashboard /> : <LoginForm />}
      </div>
    </div>
  )
}

export default function Ex02LoginPage() {
  return (
    <AuthProvider>
      <PageContent />
    </AuthProvider>
  )
}
