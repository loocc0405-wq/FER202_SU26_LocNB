/**
 * Ex01CounterPage.jsx – Trang bài 1: Counter
 *
 * TODO: Import CounterProvider từ '../context/CounterContext'
 *       Import CounterDisplay, CounterControls, StatusMessage từ '../components/counter/'
 *
 *       Bọc toàn bộ nội dung trang trong <CounterProvider>.
 *       Đặt các component theo thứ tự:
 *         <CounterDisplay />
 *         <CounterControls />
 *         <StatusMessage />
 */
import { Container } from 'react-bootstrap'
import { CounterProvider } from '../context/CounterContext'
import CounterDisplay from '../components/counter/CounterDisplay'
import CounterControls from '../components/counter/CounterControls'
import StatusMessage from '../components/counter/StatusMessage'

export default function Ex01CounterPage() {
  return (
    <CounterProvider>
      <Container className="py-4">
        <h1>Bài 1 – Counter</h1>
        <CounterDisplay />
        <CounterControls />
        <StatusMessage />
      </Container>
    </CounterProvider>
  )
}