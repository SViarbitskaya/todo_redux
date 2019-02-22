import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'

const TodoList = ({ todos, toggleTodo, deleteTodo, toggleDump}) => (
  <Grid item xs={24}>
    Your todolist <span>{todos.length === 0 ?  "is currently empty" : ':'}</span>
    <List>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          deleteTodo={deleteTodo}
          toggleDump={toggleDump}
        />
      )}
    </List>
  </Grid>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  dumpTodo: PropTypes.func.isRequired
}

export default TodoList