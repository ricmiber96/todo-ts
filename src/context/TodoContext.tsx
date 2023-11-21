import { ReactNode, createContext, useReducer } from "react";
import todoReducer, { initialState } from "../reducer/TodoReducer";
import { FilterValue, ListOfTodos } from "../types";

export interface TodoContextProps {
    todos: ListOfTodos
    filterSelected: FilterValue
    handleCompleted: (id: string, completed: boolean) => void
    handleRemove: (id: string) => void
    handleUpdateTodo: (id: string, title: string) => void
    handleClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void

}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);


const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [{todos,filterSelected}, dispatch] = useReducer(todoReducer, initialState)
    
    const handleCompleted = (id: string, completed: boolean):void => {
      dispatch({type: 'COMPLETED' , payload: {id, completed}})
    }

    const handleRemove = (id: string):void => {
      dispatch({type: 'REMOVE' , payload: {id}})
    }

    const handleUpdateTodo = (id: string, title: string):void => {
      dispatch({type: 'UPDATE_TITLE' , payload: {id, title}})
    }

    const handleClearCompleted = ():void => {
      dispatch({type: 'CLEAR_COMPLETED'})
    }

    const handleFilterChange = (filter: FilterValue):void => {
      dispatch({type: 'FILTER_CHANGE', payload: {filter}})
      const params = new URLSearchParams(window.location.search)
      params.set('filter', filter)
      window.history.pushState(null, '', `${window.location.pathname}?${params.toString()}`)
    }


    const contextValue:TodoContextProps  = {
        todos,
        filterSelected,
        handleCompleted,
        handleRemove,
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

export default TodoProvider

