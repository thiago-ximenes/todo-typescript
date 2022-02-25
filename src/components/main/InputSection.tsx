import React, { FormEvent, useContext, useState, useEffect } from 'react'
import MyTasksContext from '../../context/TasksContext/MyTasksContext'
import { MyTasks } from '../../context/TasksContext/types'
import ActionButton from './ActionButton'

type InputSectionProps = {
  cancelClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null) => void ,
  buttonName: string | null,
  title: string | null,
  description: string | null,
  id: number | null,
}


function InputSection({ cancelClick , buttonName = null, title = null, description = null, id = null }: InputSectionProps) {
  const { myTags, setMyTasks, myTasks } = useContext(MyTasksContext)

  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [textareaTitle, setTextareaTitle] = useState<string>('')
  const [textareaDescription, setTextareaDescription] = useState<string>('')

  useEffect(() => {
    setTextareaTitle(title || '');
    setTextareaDescription(description || '');
  }, [])

  function autoGrowing(e : FormEvent) : void {
    const textareas : NodeListOf<HTMLTextAreaElement> = document.querySelectorAll('.textarea-add-task') as NodeListOf<HTMLTextAreaElement>
    textareas.forEach((textarea : HTMLTextAreaElement) => {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    })
  }

  function handleTitleChange(e : FormEvent) : void {
    const target : HTMLTextAreaElement = e.target as HTMLTextAreaElement
    setTextareaTitle(target.value)
    if (target.value.length > 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  function handleClick(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) : void {
    e.preventDefault()
    function newId() : number {
      if (id) {
        return id
      }
      return myTasks.length > 0 ? myTasks[myTasks.length - 1].id + 1 : 1
    }
    const newTask : MyTasks = {
      id: newId(),
      title: textareaTitle,
      description: textareaDescription,
      tags: myTags,
      isDone: false
  }
    if (id) {
      myTasks.splice(myTasks.findIndex((task : MyTasks) => task.id === id), 1, newTask)
      setMyTasks(myTasks)
      cancelClick(null)
    } else {
      setMyTasks([...myTasks, newTask])
    }
    setTextareaTitle('')
    setTextareaDescription('')
    setIsDisabled(true)
  }

  return (
    <form>
      <div
        className="d-flex flex-column align-items-center
      bg-opacity-50 bg-black rounded-3 p-2"
      >
        <textarea
          value={ textareaTitle }
          onChange={ handleTitleChange }
          onInput={autoGrowing}
          className="container-fluid bg-transparent border-0 text-white textarea-add-task"
          placeholder="exemplo: Comprar leite"
        />
        <textarea
          value={ textareaDescription }
          onChange={ (e) => setTextareaDescription(e.target.value) }
          onInput={(e) => autoGrowing(e)}
          className="container-fluid bg-transparent border-0 text-white textarea-add-task"
          placeholder="descrição: Comprar leite em supermercado"
        />
        <div
          className="d-flex align-items-center align-self-start"
        >
          { myTags.map((tag) => (
            <div
              onClick={ () => { console.log('tag clicked') } }
              className="badge mr-2 mb-2 btn btn-outline-dark text-primary"
              key={tag.title}
            >
              <span className="me-1">{ tag.title }</span>
              <span>{ tag.icon }</span>
            </div>
          ) ) }
        </div>
      </div>
      <div
        className="d-flex my-3 align-self-start"
      >
        <ActionButton
          onClick={ handleClick }
          isDisabled={ isDisabled }
          buttonName={ buttonName ? buttonName : 'Adicionar tarefa' }
        />
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