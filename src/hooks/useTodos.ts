import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { type TodoContextType } from '../reducer/TodoReducer'

export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext)
  console.log('====================================')
  console.log('context', context)
  console.log('====================================')
  if (context == null) {
    throw new Error('useTodos must be used within a TodoProvider')
  }
  return context
}
