import React, { useState } from 'react'
import { type ListOfTodos, type TodoId, type Todo as TodoType } from '../types'
import TodoItem from './TodoItem'

interface Props {
  todos: ListOfTodos
  setTitle: (params: Omit<TodoType, 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleted, setTitle }) => {
  const [isEditing, setIsEditing] = useState<string>('')

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
            setTitle={setTitle}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onToggleCompleted={onCompleted}
            onRemoveTodo={onRemoveTodo} />
        </li>
      ))}
    </ul>
  )
}

export default Todos
