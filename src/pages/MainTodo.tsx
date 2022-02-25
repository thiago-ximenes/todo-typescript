import React, { useContext } from 'react'
import MainHeader from '../components/main/MainHeader'
import MainInput from '../components/main/MainInput'
import Relax from '../components/main/Relax'
import Tasks from '../components/main/Tasks'
import MyTasksContext from '../context/TasksContext/MyTasksContext'
import { MyTasks } from '../context/TasksContext/types'

function MainTodo() {
  const { myTasks, inputTaskOn } = useContext(MyTasksContext)

  return (
    <main
      className="container mx-auto text-center pb-5 min-vh-100"
    >
      <MainHeader />
      <hr />
      <Tasks />
      <MainInput />
      {
        inputTaskOn || myTasks
        .filter((task : MyTasks) => task.isDone === false)
        .length === 0 &&
        <Relax />
      }
    </main>
  )
}

export default MainTodo