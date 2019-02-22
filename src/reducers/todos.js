const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          dumped: false
        }
      ]
    case 'DELETE_TODO':
      //removes todo from the todolist
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE_DUMP':
      //marks todo as "dumped"
      return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, dumped: !todo.dumped, completed: false}
            : todo
      )
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos