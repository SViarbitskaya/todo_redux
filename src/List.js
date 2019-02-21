import React, { Component } from 'react';

class List extends Component {
  render() {
    //const letters = this.props.value;
    const tasks = this.props.list;
    const listItems = tasks.map((task, index) => {
        return (
            <li key={index}>
                {task}
            </li>
        );
      });
    return (
        <ul>{listItems}</ul>
        //<p>{tasks}</p>
    );
  }
}

export default List;
