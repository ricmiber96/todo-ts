import React from 'react'
import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  // TODO: Define the component props
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onFilterChange(filter)
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
