import React from 'react'
import PropTypes from 'prop-types'
import DumpedTodo from './DumpedTodo'
import List from '@material-ui/core/List';

const DumpTodoList = ({ dumpedTodos, toggleDump, deleteTodo}) => (
  <div>
    Your dumped <span>{dumpedTodos.length === 0 ?  "zero" : dumpedTodos.length }</span> todo(s).
    <List>
      {dumpedTodos.map(todo =>
        <DumpedTodo
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          toggleDump={toggleDump}
        />
      )}
    </List>
  </div>
)

DumpTodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    dumped: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default DumpTodoList