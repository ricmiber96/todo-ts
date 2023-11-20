import { useState } from 'react'
import Todos from './components/Todos'
import { type TodoTitle, type FilterValue, type TodoId, type Todo as TodoType, type ListOfTodos } from './types'
import { TODO_FILTERS } from './consts'
import Footer from './components/Footer'
import Header from './components/Header'

const mockTodos = [
  {
    id: crypto.randomUUID(),
    title: 'Learn React',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn GraphQL',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<ListOfTodos>(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(() => {
    // Avoid page refresh and keep the filter selected
    const params = new URLSearchParams(window.location.search)
    const filter = params.get('filter') as FilterValue | null
    if (filter === null) return TODO_FILTERS.ALL
    return Object.values(TODO_FILTERS).includes(filter) ? filter : TODO_FILTERS.ALL
  })

  const handleRemove = ({ id }: TodoId): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleUpdateTodo = ({ id, title }: { id: string, title: string }): void => {
    const newTodos = todos.map((todo) => {
    // Asegúrate de que el formato del id coincida
      if (todo.id === id) {
        return { ...todo, title }
      }
      return todo
    }) as ListOfTodos
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        setTitle= {handleUpdateTodo}
        todos={filteredTodos}
        onCompleted={handleCompleted}
        onRemoveTodo={handleRemove} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
