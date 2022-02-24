import React, { useContext } from 'react'
import MyTasksContext from '../../context/TasksContext/MyTasksContext'
import { MyTasks } from '../../context/TasksContext/types'
import { BsFillTrash2Fill, BsFillPencilFill } from 'react-icons/bs'

function Tasks() {
  const { myTasks, setMyTasks } = useContext(MyTasksContext)

  function handleChange(taskId : number) {
    const newTasks = myTasks.map((task : MyTasks) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone
      }
      return task
    })
    setMyTasks(newTasks)
  }

  function deleteTask(taskId : number) {
    console.log(taskId)
    const newTasks = myTasks.filter((task : MyTasks) => task.id !== taskId)
    setMyTasks(newTasks)
  }

  return (
    myTasks
    .length > 0 ?
    <div>
      {
        myTasks.map((task) => 
          !task.isDone &&
          (
          <div
            onClick={ () => handleChange(task.id) }
            className="radio-label"
            key={ task.id }
          >
            <div
                className="d-flex flex-column
                "
            >
              <div
                className="d-flex align-items-center py-2 px-3"
              >
                <input
                  type="radio"
                  className="form-check-input my-auto"
                  name={ `task-${task.title}-${task.id}` }
                  id={ `task-${task.id}` }
                  checked={ task.isDone }
                  onChange={ () => handleChange(task.id) }
                />
                  <span
                    className="flex-grow-1 text-start ms-3"
                  >{ task.title }</span>
                  <span>{ task.tags.map((tag) => (
                    <span
                      key={ tag.title }
                      className="badge mr-2 mb-2 btn btn-outline-dark text-primary"
                    >
                        { tag.title }
                    </span>
                  )) }</span>
              </div>
              <div
                className="d-flex justify-content-between"
              >
                <span
                  className="text-muted align-self-start ps-5"
                >
                  { task.description }
                </span>
                <div
                  className="me-2"
                >
                  <BsFillPencilFill
                    className="me-4"
                  />
                  <BsFillTrash2Fill
                    onClick={ () => deleteTask(task.id) }
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
          )
        )
      }
    </div>
    :
    <div/>
  )
}

export default Tasks