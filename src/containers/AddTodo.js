import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  input: {
    margin: theme.spacing.unit * 4,
  },
});

let AddTodo = ({ dispatch, classes }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <Input
            placeholder = "Enter new task"
            className={classes.input}
            //react : ref; material-ui : inputRef;
            inputRef={inputElement => {
                input = inputElement
            }}
        />
        <Button type="submit" variant="contained" color="primary" >Add Todo</Button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default withStyles(styles)(AddTodo)