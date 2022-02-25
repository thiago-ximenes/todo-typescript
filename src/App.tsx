import { useState } from 'react'
import MainTodo from './pages/MainTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className="container-fluid bg-dark text-white"
    >
      <MainTodo />
    </div>
  )
}

export default App
