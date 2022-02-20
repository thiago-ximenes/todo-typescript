import { useState } from 'react'
import MainTodo from './pages/MainTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className="container-fluid bg-dark text-white"
      style={{ height: '100vh' }}
    >
      <MainTodo />
    </div>
  )
}

export default App
