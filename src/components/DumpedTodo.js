import React from 'react'
import PropTypes from 'prop-types'

const DumpedTodo = ({ id, text, toggleDump}) => (
  <li>
    <span >
      {text}
    </span>
    <button 
      onClick={() => toggleDump(id)}
      >
      Restore
    </button>
  </li>
)

DumpedTodo.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  dumped: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  restoreTodo: PropTypes.func.isRequired
}

export default DumpedTodo