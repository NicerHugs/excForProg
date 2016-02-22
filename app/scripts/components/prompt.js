import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      userResponded: false,
      userInput: ''
    }
  },
  submitInput(e) {
    if (e.which === 13) {
      this.setState({userResponded: true})
      this.props.response(this.state.userInput);
    }
    return;
  },
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.fresh===true) {
      this.setState({
        userResponded: false,
        userInput: ''
      })
    }
  },
  render() {
    let message;
    let input;
    let responseValue;
    if (!this.state.userResponded) {
      input =  (<input
        value={this.state.userInput}
        type="text"
        onChange={this.handleUserInput}
        onKeyPress={this.submitInput} />);
      message = this.props.message;
    } else {
      responseValue = this.props.responseValue;
    }
    return (
      <div>
        {message}
        {input}
        {responseValue}
      </div>
    )
  }
});
