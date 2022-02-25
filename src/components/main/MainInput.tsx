import React, { useState, useContext } from 'react'
import InputButton from './InputButton'
import InputSection from './InputSection'
import MyTasksContext from '../../context/TasksContext/MyTasksContext'

function MainInput() {
  const { inputTaskOn, setInputTaskOn } = useContext(MyTasksContext)

  function handleAddTaskClick(e : React.MouseEvent<HTMLButtonElement, MouseEvent> | null) : void {
    if (e !== null) e.preventDefault()
    setInputTaskOn(!inputTaskOn)
  }

  return (
    !inputTaskOn ?
      <InputButton
        onClick={ handleAddTaskClick }
      />
    :
    (
      <InputSection
        buttonName={ 'Adicionar tarefa'}
        cancelClick={ handleAddTaskClick }
        description={null}
        id={null}
        title={null}
      />
    )
  )
}

export default MainInput