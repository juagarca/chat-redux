import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    // console.log(this.state.value);
    event.preventDefault();
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange} />
        <button type="submit" className="btn btn-danger">Send</button>
      </form>
    );
  }
}

export default MessageForm;
