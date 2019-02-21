import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ id, onClick, completed, dumped, text, deleteTodo, toggleDump}) => (
  <li
    //style={{
      //visibility: dumped ? 'hidden' : 'visible'
    //}}
  >
    <span 
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </span>
    <button 
      onClick={() => deleteTodo(id)}
      >
      Remove
    </button>
    <button 
      onClick={() => toggleDump(id)}
      >
      Dump
    </button>
  </li>
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