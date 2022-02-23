import React, { useContext } from 'react'
import MyTasksContext from '../../context/TasksContext/MyTasksContext'

function Tasks() {
  const { myTasks } = useContext(MyTasksContext)

  return (
    myTasks.length > 0 ?
    <div>
      {
        myTasks.map((task) => (
          <div key={ task.id }>
            <p>{ task.title }</p>
            <p>{ task.description }</p>
            <p>{ task.tags.join(', ') }</p>
          </div>
        ))
      }
    </div>
    :
    <div/>
  )
}

export default Tasks