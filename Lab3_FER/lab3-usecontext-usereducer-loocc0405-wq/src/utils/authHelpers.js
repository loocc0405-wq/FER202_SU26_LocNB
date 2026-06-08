import USERS from '../data/users'

export function findUser(username, password) {
  if (!username || !password) return null
  const user = USERS.find(u => u.username === username && u.password === password)
  return user || null
}
