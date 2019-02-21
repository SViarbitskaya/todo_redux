import React from 'react'
import PropTypes from 'prop-types'
import DumpedTodo from './DumpedTodo'

const DumpTodoList = ({ dumpedTodos, toggleDump}) => (
  <div>
    Your dumped <span>{dumpedTodos.length === 0 ?  "zero" : dumpedTodos.length }</span> todo(s).
    <ul>
      {dumpedTodos.map(todo =>
        <DumpedTodo
          key={todo.id}
          {...todo}
          //onClick={() => toggleTodo(todo.id)}
          toggleDump={toggleDump}
        />
      )}
    </ul>
  </div>
)

DumpTodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    dumped: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default DumpTodoList