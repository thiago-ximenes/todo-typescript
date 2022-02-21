import React from 'react'

function MainHeader() {
  const date = new Date()
  enum Options { weekday = 'long', year = 'numeric', month = 'long', day = 'numeric' }
  const locale = date.toLocaleString('pt-BR', Options)

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