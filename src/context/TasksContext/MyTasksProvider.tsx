import React, { useState } from 'react'
import { BsFillCalendar2EventFill, BsFillInboxFill } from 'react-icons/bs'
import MyTasksContext from './MyTasksContext'
import { MyTags, MyTasks } from './types'

type MyTasksProviderProps = {
  children: React.ReactNode
}


function MyTasksProvider({ children } : MyTasksProviderProps) {
  const [myIcons] = useState<object>({
      'Hoje': <BsFillCalendar2EventFill />,
      'Caixa de Entrada': <BsFillInboxFill />,
    });
  const [myTags, setMyTags] = useState<MyTags[]>([
    {
      title: 'Hoje',
    },
    {
      title: 'Caixa de Entrada',
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
          myIcons,
        }
      }
    >
      { children }
    </MyTasksContext.Provider>
  )
}

export default MyTasksProvider