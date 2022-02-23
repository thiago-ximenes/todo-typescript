import React, { FormEvent, useContext } from 'react'
import MyTasksContext from '../../context/TasksContext/MyTasksContext'

type InputSectionProps = {
  cancelClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function InputSection({ cancelClick }: InputSectionProps) {
  const { myTags } = useContext(MyTasksContext)

  function autoGrowing(e : FormEvent) : void {
    console.log(e)
    const textareas : NodeListOf<HTMLTextAreaElement> = document.querySelectorAll('.textarea-add-task') as NodeListOf<HTMLTextAreaElement>
    textareas.forEach((textarea : HTMLTextAreaElement) => {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    })
  }

  return (
    <form>
      <div
        className="d-flex flex-column align-items-center
      bg-opacity-50 bg-black rounded-3 p-2"
      >
        <textarea
          onInput={(e) => autoGrowing(e)}
          className="container-fluid bg-transparent border-0 text-white textarea-add-task"
          placeholder="descrição: Comprar leite em supermercado"
        />
        <textarea
          onInput={autoGrowing}
          className="container-fluid bg-transparent border-0 text-white textarea-add-task"
          placeholder="exemplo: Comprar leite"
        />
        <div
          className="d-flex align-items-center align-self-start"
        >
          { myTags.map((tag) => (
            <span
              onClick={ () => { console.log('tag clicked') } }
              className="badge mr-2 mb-2 btn btn-outline-dark"
              key={tag}
            >
              { tag }
            </span>
          ) ) }
        </div>
      </div>
      <div
        className="d-flex my-3 align-self-start"
      >
        <button
          className="btn btn-danger me-3"
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