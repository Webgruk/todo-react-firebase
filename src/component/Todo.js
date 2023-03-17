import { ListItem, List, ListItemAvatar, ListItemText } from '@mui/material'

function Todo({ todo }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={todo} secondary={todo} />
      </ListItem>
    </List>
  )
}

export default Todo
