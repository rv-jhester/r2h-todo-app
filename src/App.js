import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import TodoListItems from './TodoListItems';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      showCompleted: true,
    };
  }

  handleNewTodo = (description) => {
    const todos = this.state.todos.slice();

    todos.push({
      description,
      isComplete: false,
    });

    this.setState({ todos })
  }

  handleCheckboxChange = (event) => {
    const showCompleted = event.target.checked;

    this.setState({ showCompleted });
  }

  handleDeleteTodo = (index) => {
    const todos = this.state.todos.slice();

    todos.splice(index, 1);

    this.setState({ todos });
  }

  handleChangeTodoStatus = (index, isComplete) => {
    const todos = this.state.todos.slice();
    
    todos[index].isComplete = isComplete;
    
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          handleNewTodo={this.handleNewTodo}
          handleCheckboxChange={this.handleCheckboxChange}
          showCompleted={this.state.showCompleted}
        />
        <TodoListItems 
          todos={this.state.todos}
          showCompleted={this.state.showCompleted}
          handleDeleteTodo={this.handleDeleteTodo}
          handleChangeTodoStatus={this.handleChangeTodoStatus}
        />
      </div>
    );
  }
}

export default App;
