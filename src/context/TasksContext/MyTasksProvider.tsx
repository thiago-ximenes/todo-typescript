import React, { useState } from 'react'
import MyTasksContext from './MyTasksContext'
import { BsFillInboxFill, BsFillCalendar2EventFill } from 'react-icons/bs'
import { MyTags, MyTasks } from './types'

type MyTasksProviderProps = {
  children: React.ReactNode
}


function MyTasksProvider({ children } : MyTasksProviderProps) {
  const [myTags, setMyTags] = useState<MyTags[]>([
    {
      title: 'Hoje',
      icon: <BsFillCalendar2EventFill />
    },
    {
      title: 'Caixa de Entrada',
      icon: <BsFillInboxFill />,
    },

  ])
  const [myTasks, setMyTasks] = useState<MyTasks[]>([]);
  const [inputTaskOn, setInputTaskOn] = useState<boolean>(false)

  return (
    <MyTasksContext.Provider
      value={
        {
          myTags,
          setMyTags,
          myTasks,
          setMyTasks,
          inputTaskOn,
          setInputTaskOn,
        }
      }
    >
      { children }
    </MyTasksContext.Provider>
  )
}

export default MyTasksProvider