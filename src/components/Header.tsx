import React from 'react'
import { type TodoTitle } from '../types'
import CreateTodo from './CreateTodo'

interface Props {
  // TODO: Define the component props
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>ToDO <img style={{ width: '60px', height: 'auto' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' alt='logo'/></h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}

export default Header
