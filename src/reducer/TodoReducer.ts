import { type FilterValue, type ListOfTodos } from '../types'

export const initialState: State = { 
    todos: [],
    filterSelected: 'all'
}

export interface State {
    todos: ListOfTodos
    filterSelected: FilterValue
  }

export type Action =
  | { type: 'INIT_TODO', payload: { todos: ListOfTodos } }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'COMPLETED', payload: { id: string, completed: boolean } }
  | { type: 'FILTER_CHANGE', payload: { filter: FilterValue } }
  | { type: 'REMOVE', payload: { id: string } }
  | { type: 'SAVE', payload: { title: string } }
  | { type: 'UPDATE_TITLE', payload: { id: string, title: string } }



const todoReducer = (state: State, action: Action): State => {
    
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
        case 'COMPLETED':{
            const { id, completed } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === id){
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
        case 'REMOVE':{
            const { id } = action.payload
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== id)
            }
        }
        case 'SAVE': {
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
        case 'UPDATE_TITLE':{
            const { id, title } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === id ? {...todo, title} : todo
                })
            }
        }
        default:
            return state
    }
}

export default todoReducer