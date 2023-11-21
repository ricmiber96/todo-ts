import { Dispatch, ReactNode, createContext, useReducer } from "react";
import todoReducer, { Action, State, initialState } from "../reducer/TodoReducer";
import { FilterValue, ListOfTodos } from "../types";

interface TodoContext {
    state: State
    dispatch: Dispatch<Action>
}

interface TodoContextProps {
    todos: ListOfTodos
    filterSelected: FilterValue
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);


const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [{todos,filterSelected}, dispatch] = useReducer(todoReducer, initialState)
    
    

    const contextValue:TodoContextProps  = {
        todos,
        filterSelected,
    }

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider

