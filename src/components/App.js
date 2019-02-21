import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ShowDumpedTodos from '../containers/ShowDumpedTodos';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ShowDumpedTodos />
  </div>
)

export default App