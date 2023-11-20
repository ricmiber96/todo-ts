import React, { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  // TODO: Define the component props
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    saveTodo({
      title: inputValue
    })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='new-todo'
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder= '¿Qué quieres hacer?'
      />
    </form>
  )
}

export default CreateTodo
