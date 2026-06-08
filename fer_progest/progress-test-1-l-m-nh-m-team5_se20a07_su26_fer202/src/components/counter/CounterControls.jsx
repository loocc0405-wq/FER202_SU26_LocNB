/**
 * CounterControls.jsx – Các nút điều khiển bộ đếm (Bài 1)
 *
 * TODO: Dùng useCounter() từ CounterContext để lấy increment, decrement, reset.
 *       Render 3 nút: Tăng (+), Giảm (−), Reset.
 *       Component này KHÔNG nhận bất kỳ props nào.
 */
import { Button } from 'react-bootstrap'
import { useCounter } from '../../context/CounterContext'

export default function CounterControls() {
  const { increment, decrement, reset } = useCounter()
  return (
    <div className="d-flex gap-2 my-3">
      <Button variant="success" onClick={increment}>+</Button>
      <Button variant="danger" onClick={decrement}>−</Button>
      <Button variant="secondary" onClick={reset}>Reset</Button>
    </div>
  )
}