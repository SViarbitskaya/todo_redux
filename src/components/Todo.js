import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DeleteIcon from '@material-ui/icons/Delete'
import DumpIcon from '@material-ui/icons/ArrowDownward'

const Todo = ({ id, onClick, completed, text, deleteTodo, toggleDump}) => (
  <ListItem>
    <ListItemText primary={text}
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton 
        onClick={() => deleteTodo(id)}
        >
        <DeleteIcon />
      </IconButton>
      <IconButton 
        onClick={() => toggleDump(id)}
        >
        <DumpIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  dumped: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todo