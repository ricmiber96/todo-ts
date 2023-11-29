import React from 'react'
import CreateTodo from './CreateTodo'

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1>ToDO <img style={{ width: '60px', height: 'auto' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' alt='logo'/></h1>
      <CreateTodo/>
    </header>
  )
}

export default Header
