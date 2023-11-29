import React, { useEffect, useRef, useState } from 'react'
import { useTodos } from '../hooks/useTodos'
import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  isEditing: string
  setIsEditing: (completed: string) => void
}

export const TodoItem: React.FC<Props> = ({ id, title, completed, isEditing, setIsEditing }) => {
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEdit = useRef<HTMLInputElement>(null)

  const { handleRemoveTodo, handleUpdateTodo } = useTodos()

  useEffect(() => {
    inputEdit.current?.focus()
  }, [isEditing])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())
      if (editedTitle !== title) {
        handleUpdateTodo(id, editedTitle, completed)
      }
      if (editedTitle === '') {
        handleRemoveTodo(id)
        setIsEditing('')
      }
    }
    if (e.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  return (
    <>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onChange={(e) => {
            handleUpdateTodo(id, title, e.target.checked)
          }} />
        <label className='todo-title'>{title}</label>
        <button
          onClick={() => { handleRemoveTodo(id) }}
          className='destroy'></button>
      </div>
      <input
        className='edit'
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing('')
        }}
        ref={inputEdit}/>
    </>
  )
}

export default TodoItem
