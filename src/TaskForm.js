import React, { Component } from 'react';

class TaskForm extends Component {
  
  handleAdd = (event) => {
    event.preventDefault();
    this.props.onTaskAdd(this.task.value);
    
  }

  render() {
    //const newTask = this.props.newTask;
    return (
      <form onSubmit={this.handleAdd}>
        <label>
          New Task:
          <input type="text" 
            //value={this.state.value}
            ref={(element) => {this.task = element}}
          />
        </label>
        <input type="submit" 
          value="Add"
          />
      </form>
    );
  }
}

export default TaskForm;