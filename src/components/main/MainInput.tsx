import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'

function MainInput() {
  const [inputTaskOn, setInputTaskOn] = useState<boolean>(false)

  function handleAddTaskClick(e : React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setInputTaskOn(!inputTaskOn)
  }

  return (
    !inputTaskOn ?
    <button
      className="btn btn-outline-secondary d-flex mx-auto
      justify-content-center align-items-center fw-bold fs-4"
      type="button"
      onClick={handleAddTaskClick}
    >
      Adicionar tarefa
      <div
        className="ms-2 d-flex align-items-center text-danger"
      >
        <BsPlusCircleDotted />
      </div>
    </button>
    :
    (
      <div>Funfou</div>
    )
  )
}

export default MainInput