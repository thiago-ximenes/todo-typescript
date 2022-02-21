import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MyTaskProvider from './context/TasksContext/MyTasksProvider'

ReactDOM.render(
  <React.StrictMode>
    <MyTaskProvider>
      <App />
    </MyTaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
