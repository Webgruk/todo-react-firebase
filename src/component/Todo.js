import { ListItem, List, ListItemAvatar, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

import './todo.css'
function Todo({ args }) {
  const docRef = doc(db, 'todos', args.id)

  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={args.item.todo} secondary={args.item.todo} />
      </ListItem>
      <DeleteIcon
        onClick={() => {
          deleteDoc(docRef)
        }}
      />
    </List>
  )
}

export default Todo
