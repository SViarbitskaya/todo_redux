import React, { Component } from 'react';
import List from './List';
import TaskForm from './TaskForm';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    //this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.state = {
      newTask: '',
      list: [],
    };
  }

  /*handleTaskChange(newTask) {
    this.setState({newTask: newTask});
    const list = this.state.list;
    const updatedList = [...list, newTask];
    this.setState({list: updatedList});
  }*/

  handleTaskAdd(value) {

    this.setState({newTask: value});
    //const list = this.state.list;
    const updatedList = [...this.state.list, value];
    this.setState({list: updatedList});
  }

  render() {
    //const newTask = this.state.newTask;
    //const updatedList = this.state.list;
    return (
      <div className="ToDo">
        <h1>To Do List</h1>
        <div>
          <TaskForm 
            //newTask={this.state.newTask}
            //onTaskChange={this.handleTaskChange}
            onTaskAdd={this.handleTaskAdd}/>
        </div>
        <div>
          <List list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default ToDo;
