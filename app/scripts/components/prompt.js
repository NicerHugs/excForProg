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
    let message = this.props.response(this.state.userInput);
    let input;
    if (!this.state.userResponded) {
      message = this.props.message;
      input =  (<input
        value={this.state.userInput}
        type="text"
        onChange={this.handleUserInput}
        onKeyPress={this.submitInput} />)
    }
    return (
      <div>
        {message}
        {input}
      </div>
    )
  }
});
