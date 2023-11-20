import React, { useEffect, useRef, useState } from 'react'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  setTitle: (params: Omit<TodoType, 'completed'>) => void
  isEditing: string
  setIsEditing: (completed: string) => void
}

export const TodoItem: React.FC<Props> = ({ id, title, completed, setTitle, isEditing, setIsEditing, onToggleCompleted, onRemoveTodo }) => {
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEdit = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputEdit.current?.focus()
  }, [isEditing])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())
      if (editedTitle !== title) {
        setTitle({ id, title: editedTitle })
      }
      if (editedTitle === '') onRemoveTodo({ id })
      setIsEditing('')
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
            onToggleCompleted({ id, completed: e.target.checked })
          }} />
        <label className='todo-title'>{title}</label>
        <button
          onClick={() => { onRemoveTodo({ id }) }}
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
