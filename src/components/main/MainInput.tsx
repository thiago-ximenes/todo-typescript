import React, { useState } from 'react'
import InputButton from './InputButton'
import InputSection from './InputSection'

function MainInput() {
  const [inputTaskOn, setInputTaskOn] = useState<boolean>(false)

  function handleAddTaskClick(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
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
        cancelClick={ handleAddTaskClick }
      />
    )
  )
}

export default MainInput