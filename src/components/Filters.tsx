import React from 'react'
import { FILTERS_BUTTONS } from '../consts'
import { useTodos } from '../hooks/useTodos'
import { type FilterValue } from '../types'

export const Filters: React.FC = () => {
  const { state, handleFilterChange } = useTodos()
  const { filterSelected } = state

  const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    handleFilterChange(filter)
    history.pushState(null, '', FILTERS_BUTTONS[filter].href)
  }

  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = filterSelected === key
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
                key={key}
                className={className}
                href={href}
                onClick={handleClick(key as FilterValue)}>
                {literal}
              </a>
            </li>
          )
        }
        )
      }
    </ul>
  )
}

export default Filters
