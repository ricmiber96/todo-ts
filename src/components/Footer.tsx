import React from 'react'
import Filters from './Filters'

interface Props {
  // TODO: Define the component props
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, onClearCompleted }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tarea(s) restante(s)
      </span>
      <Filters/>
      {
        completedCount > 0 && (
          <button className='clear-completed' onClick={onClearCompleted}>
                    Borrar completados
          </button>
        )
      }
    </footer>
  )
}

export default Footer
