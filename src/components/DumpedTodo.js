import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DeleteIcon from '@material-ui/icons/Delete'
import RestoreIcon from '@material-ui/icons/ArrowUpward'

const DumpedTodo = ({ id, text, deleteTodo, toggleDump}) => (
  <ListItem>
    <ListItemText primary={text} /> 
    <ListItemSecondaryAction>
      <IconButton 
        onClick={() => deleteTodo(id)}
        >
        <DeleteIcon />
      </IconButton>
      <IconButton variant="contained" 
        onClick={() => toggleDump(id)}
        >
        <RestoreIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

DumpedTodo.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  dumped: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  restoreTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default DumpedTodo