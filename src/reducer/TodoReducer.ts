import { mocksTodos } from '../mocks/todo'
import { type FilterValue, type ListOfTodos } from '../types'

export const initialState: TodoState = {
  todos: mocksTodos,
  filterSelected: 'all'
}

export interface TodoState {
  todos: ListOfTodos
  filterSelected: FilterValue
}

export type TodoAction =
  | { type: 'INIT_TODO', payload: { todos: ListOfTodos } }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'COMPLETED_TODO', payload: { id: string, completed: boolean } }
  | { type: 'FILTER_CHANGE', payload: { filter: FilterValue } }
  | { type: 'REMOVE_TODO', payload: { id: string } }
  | { type: 'ADD_TODO', payload: { title: string } }
  | { type: 'UPDATE_TODO', payload: { id: string, title: string, completed: boolean } }

export interface TodoContextType {
  state: TodoState
  handleCompleted: (id: string, completed: boolean) => void
  handleRemoveTodo: (id: string) => void
  handleAddTodo: (title: string) => void
  handleUpdateTodo: (id: string, title: string, completed: boolean) => void
  handleClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void

}

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'INIT_TODO':{
      const { todos } = action.payload
      return {
        ...state,
        todos
      }
    }
    case 'CLEAR_COMPLETED':{
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
    }
    case 'COMPLETED_TODO':{
      const { id, completed } = action.payload
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed
            }
          }
          return todo
        })
      }
    }
    case 'FILTER_CHANGE':{
      const { filter } = action.payload
      return {
        ...state,
        filterSelected: filter
      }
    }
    case 'REMOVE_TODO':{
      const { id } = action.payload
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
      }
    }
    case 'ADD_TODO': {
      const { title } = action.payload
      const newTodo = {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    }
    case 'UPDATE_TODO':{
      const { id, title, completed } = action.payload
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === id ? { ...todo, title, completed } : todo
        })
      }
    }
    default:
      return state
  }
}
