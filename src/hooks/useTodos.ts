import { useContext } from "react";
import { TodoContext, TodoContextProps } from "../context/TodoContext";

export const useTodos = ():TodoContextProps => {
    const context = useContext(TodoContext)

    if(!context){
        throw new Error('useTodos must be used within a TodoProvider')
    }
    return context
}
