import React from 'react'
import MainHeader from '../components/main/MainHeader'
import MainInput from '../components/main/MainInput'
import Tasks from '../components/main/Tasks'

function MainTodo() {
  return (
    <main
      className="container mx-auto text-center"
    >
      <MainHeader />
      <MainInput />
      <Tasks />
    </main>
  )
}

export default MainTodo