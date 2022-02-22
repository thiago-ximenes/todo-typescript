import React, { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'

type InputButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function InputButton({ onClick }: InputButtonProps) {
  const [inputTaskOn, setInputTaskOn] = useState<boolean>(false)

  return (
    <button
      className="btn btn-outline-secondary d-flex mx-auto
      justify-content-center align-items-center fw-bold fs-4"
      type="button"
      onClick={onClick}
    >
      Adicionar tarefa
      <div
        className="ms-2 d-flex align-items-center text-danger"
      >
        <BsPlusCircleDotted />
      </div>
    </button>
  )
}

export default InputButton