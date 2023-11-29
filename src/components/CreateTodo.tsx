import React, { useState } from 'react'
import { useTodos } from '../hooks/useTodos'

export const CreateTodo: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const { handleAddTodo } = useTodos()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleAddTodo(inputValue)
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
