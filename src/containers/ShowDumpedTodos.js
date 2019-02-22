import { connect } from 'react-redux'
import DumpTodoList from '../components/DumpTodoList'
import {deleteTodo, toggleDump } from '../actions'

const getDumpedTodos = (todos) => {
        return todos.filter(t => t.dumped)
}

const mapStateToProps = state => ({
  dumpedTodos: getDumpedTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
  toggleDump: id => dispatch(toggleDump(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DumpTodoList)