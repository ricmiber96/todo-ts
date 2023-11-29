import { type ReactNode, createContext, useReducer } from 'react'
import { type TodoContextType, initialState, todoReducer } from '../reducer/TodoReducer'
import { type FilterValue, type ListOfTodos } from '../types'

export interface TodoContextProps {
  todos: ListOfTodos
  filterSelected: FilterValue
  handleCompleted: (id: string, completed: boolean) => void
  handleRemove: (id: string) => void
  handleUpdateTodo: (id: string, title: string, completed: boolean) => void
  handleClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void

}

export const TodoContext = createContext<TodoContextType | undefined >(undefined)

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: initialState.todos, filterSelected: initialState.filterSelected })

  const handleCompleted = (id: string, completed: boolean): void => {
    dispatch({ type: 'COMPLETED_TODO', payload: { id, completed } })
  }

  const handleRemoveTodo = (id: string): void => {
    dispatch({ type: 'REMOVE_TODO', payload: { id } })
  }

  const handleAddTodo = (title: string): void => {
    dispatch({ type: 'ADD_TODO', payload: { title } })
  }

  const handleUpdateTodo = (id: string, title: string, completed: boolean): void => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, title, completed } })
  }

  const handleClearCompleted = (): void => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  const handleFilterChange = (filter: FilterValue): void => {
    dispatch({ type: 'FILTER_CHANGE', payload: { filter } })
    const params = new URLSearchParams(window.location.search)
    params.set('filter', filter)
    window.history.pushState(null, '', `${window.location.pathname}?${params.toString()}`)
  }

  const contextValue: TodoContextType = {
    state,
    handleCompleted,
    handleRemoveTodo,
    handleAddTodo,
    handleUpdateTodo,
    handleClearCompleted,
    handleFilterChange
  }

  return (
        <TodoContext.Provider value={contextValue}>
          {children}
        </TodoContext.Provider>
  )
}
