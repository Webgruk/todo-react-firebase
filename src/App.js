// react imports
import { useEffect, useState } from 'react'
import './App.css'

// firebase imports
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import Todo from './component/Todo'

import { db } from './firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const colRref = collection(db, 'todos')

  useEffect(() => {
    const qry = query(colRref, orderBy('timestamp', 'desc'))
    const unsubscribe = onSnapshot(qry, (snapshot) => {
      let docs = snapshot.docs
      setTodos(
        docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        })),
      )
    })
  }, [input])

  console.log(todos)

  const addTodo = (e) => {
    e.preventDefault()
    addDoc(colRref, {
      todo: input,
      timestamp: serverTimestamp(),
    })
    setInput('')
  }
  return (
    <div className="app">
        <h1>TODO React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
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
          <Todo key={todo.id} args={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
