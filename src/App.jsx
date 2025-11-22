import react from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Todos } from './components/Todos'
import { Nav } from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <h1 className='flex'>To-Do App with React Redux | STK</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
