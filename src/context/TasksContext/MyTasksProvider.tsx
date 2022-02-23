import React, { useState } from 'react'
import MyTasksContext from './MyTasksContext'

type MyTasksProviderProps = {
  children: React.ReactNode
}

function MyTasksProvider({ children } : MyTasksProviderProps) {
  const [myTags, setMyTags] = useState<string[]>([
    'Hoje',
    'Caixa de Entrada'
  ])
  const [myTasks, setMyTasks] = useState<string[]>([]);
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