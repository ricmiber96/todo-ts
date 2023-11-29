import React, { useEffect, useState } from 'react'
import { TODO_FILTERS } from '../consts'
import { useTodos } from '../hooks/useTodos'
import { type ListOfTodos, type Todo as TodoType } from '../types'
import TodoItem from './TodoItem'

interface Props {
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ onCompleted }) => {
  const [isEditing, setIsEditing] = useState<string>('')
  const [todos, setTodos] = useState<ListOfTodos>([])
  const { state } = useTodos()

  useEffect(() => {
    const { todos } = state
    const filteredTodos = todos.filter((todo) => {
      if (state.filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
      if (state.filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
      return todo
    })
    setTodos(filteredTodos)
  }, [state])

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''} ${isEditing === todo.id ? 'editing' : ''}`}
          onDoubleClick={() => { setIsEditing(todo.id) }}
        >
          <TodoItem
            key={todo.id}
            id = {todo.id}
            title = {todo.title}
            completed = {todo.completed}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onToggleCompleted={onCompleted} />
        </li>
      ))}
    </ul>
  )
}

export default Todos
