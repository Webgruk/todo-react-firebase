import { useState } from 'react'
import './App.css'

import { Button, FormControl, Input, InputLabel } from '@mui/material'
import Todo from './component/Todo'

function App() {
  const [todos, setTodos] = useState([
    'make a firebase project',
    'build projects',
  ])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="App">
        <h1>TODO React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></Input>
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
