import React from 'react'

function MainHeader() {

  const date : Date = new Date()
  const options : object  = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const locale : string = date.toLocaleString('pt-BR', options)

  return (
    <header
      className="justify-content-center align-items-center"
    >
      <div
        className="d-flex justify-content-around align-items-center"
      >
        <h2>
          Tarefas do dia
        </h2>
        <span>
          {locale}
        </span>
      </div>
    </header>
  )
}

export default MainHeader