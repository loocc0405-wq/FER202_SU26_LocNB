/**
 * CounterContext.jsx – Context quản lý state đếm (Bài 1)
 *
 * TODO 1: Tạo CounterContext bằng createContext()
 *
 * TODO 2: Tạo CounterProvider component
 *         - Dùng useState để lưu count (khởi tạo = 0)
 *         - Khai báo 3 hàm: increment, decrement, reset
 *         - Truyền { count, increment, decrement, reset } vào value của Provider
 *         - Bọc children bên trong Provider
 *
 * TODO 3: Tạo custom hook useCounter()
 *         - Gọi useContext(CounterContext)
 *         - Ném lỗi nếu context là null
 *         - Export hook này để các component sử dụng
 *
 * Export: CounterProvider (default hoặc named), useCounter
 */
import { createContext, useContext, useState } from 'react'

// TODO 1: Tạo context (giá trị mặc định null để kiểm tra dùng sai chỗ)
const CounterContext = createContext(null)

// TODO 2: Provider giữ state và các hàm
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
  const reset = () => setCount(0)

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
}

// TODO 3: Custom hook – kiểm tra null, ném lỗi nếu dùng ngoài Provider
export function useCounter() {
  const context = useContext(CounterContext)
  if (!context) {
    throw new Error('useCounter phải được dùng bên trong <CounterProvider>')
  }
  return context
}