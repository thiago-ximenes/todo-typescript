import React, { useContext } from 'react'
import MyTasksContext from '../../context/TasksContext/MyTasksContext'

function Tasks() {
  const { myTasks } = useContext(MyTasksContext)

  return (
    myTasks.length > 0 &&
    <div>
      <h1>Task</h1>
    </div>
  )
}

export default Tasks