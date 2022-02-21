import React, { useContext } from 'react'
import MyTasksContext from '../../context/TasksContext/MyTasksContext'

type InputSectionProps = {
  cancelClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function InputSection({ cancelClick }: InputSectionProps) {
  const { myTags } = useContext(MyTasksContext)

  return (
    <form
      className="d-flex flex-column align-items-center"
    >
      <textarea
        placeholder="exemplo: Comprar leite"
      />
      <textarea
        placeholder="descrição: Comprar leite em supermercado"
      />
      <div>
        { myTags.map((tag) => (
          <span
            key={tag}
          >
            { tag }
          </span>
        ) ) }
      </div>
      <div
        className="d-flex"
      >
        <button
          className="btn btn-danger"
          type="button"
        >
          Adicionar tarefa
        </button>
        <button
          className="btn btn-outline-light"
          onClick={ cancelClick }
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default InputSection