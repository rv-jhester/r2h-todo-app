import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  handleChangeTodoStatus = (event) => {
    const { onChangeTodoStatus, index } = this.props;

    const isComplete = event.target.checked;

    onChangeTodoStatus(index, isComplete);
  }

  render() {
    const { 
      description, 
      isComplete, 
      handleDeleteTodo, 
      onChangeTodoStatus,
      index
    } = this.props;

    const style = {};

    if (isComplete) {
      style.textDecoration = 'line-through';
    }

    return (
      <div>
        <input 
          type="checkbox" 
          checked={isComplete} 
          onChange={this.handleChangeTodoStatus} 
        />
        <span style={style}>
          {description}
        </span>
        <button onClick={() => handleDeleteTodo(index)}>x</button>
      </div>
    );
  }
}

export default TodoItem;