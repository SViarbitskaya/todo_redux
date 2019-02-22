import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ShowDumpedTodos from '../containers/ShowDumpedTodos'
import Grid from '@material-ui/core/Grid'

const App = () => (
  <Grid 
    container 
    direction="column"
    justify="center"
    alignContent="center"
  >
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ShowDumpedTodos />
  </Grid>
)

export default App