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

  return (
    <MyTasksContext.Provider
      value={
        {
          myTags,
          setMyTags,
        }
      }
    >
      { children }
    </MyTasksContext.Provider>
  )
}

export default MyTasksProvider