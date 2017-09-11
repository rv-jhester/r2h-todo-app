import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoListItems extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    showCompleted: PropTypes.bool.isRequired
  }

  render() {
    const { 
      handleDeleteTodo, 
      handleChangeTodoStatus, 
      showCompleted 
    } = this.props;
    let { todos } = this.props;
    
    todos = todos.map((todo, index) => {
      return (
        <TodoItem 
          key={index} 
          description={todo.description}
          isComplete={todo.isComplete}
          index={index}
          handleDeleteTodo={handleDeleteTodo}
          onChangeTodoStatus={handleChangeTodoStatus}
        />
      )
    });

    if (!showCompleted) {
      todos = todos.filter((todo) => {
        return !todo.isComplete;
      });
    }

    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoListItems;