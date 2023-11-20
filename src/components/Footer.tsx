import React from 'react'
import { type FilterValue } from '../types'
import Filters from './Filters'

interface Props {
  // TODO: Define the component props
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filterSelected, handleFilterChange, onClearCompleted }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tarea(s) restante(s)
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}/>
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
