import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInput extends Component {
  static propTypes = {
    handleNewTodo: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    showCompleted: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleInputChange = (event) => {
    const input = event.target.value;
    this.setState({ input })
  }

  handleNewTodo = () => {
    this.props.handleNewTodo(this.state.input);

    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.input} 
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleNewTodo}>Add to do</button>
        <div>
          <label>
            Show completed
            <input 
              onChange={this.props.handleCheckboxChange} 
              type="checkbox"
              checked={this.props.showCompleted}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default UserInput;