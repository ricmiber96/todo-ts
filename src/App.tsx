import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Todos from './components/Todos'
import { TodoProvider } from './context/TodoContext'
import { type FilterValue, type ListOfTodos, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts'

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

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <TodoProvider>
      <div className='todoapp'>
        <Header />
        <Todos
          onCompleted={handleCompleted} />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={handleRemoveAllCompleted}/>
      </div>
    </TodoProvider>
  )
}

export default App
