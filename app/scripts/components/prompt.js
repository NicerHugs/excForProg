import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      userResponded: false,
      userInput: '',
      errorMsg: ''
    }
  },
  submitInput(e) {
    if (e.which === 13) {
      if (!this.props.validateInput || this.props.validateInput && this.props.validateInput(e.target.value)) {
        this.setState({
          userResponded: true,
          errorMsg: ''
        });
        this.props.response(this.state.userInput);
      } else {
        this.setState({errorMsg: `Sorry, ${this.state.userInput} is not a valid entry`});
      }
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
    let errorMsg = this.state.errorMsg ? (<div className="errorMsg">{this.state.errorMsg}</div>) : this.state.errorMsg;
    if (!this.state.userResponded) {
      input =  (<input
        className="prompt__field"
        value={this.state.userInput}
        type="text"
        onChange={this.handleUserInput}
        onKeyPress={this.submitInput} />);
      message = (<span className="prompt__message">{this.props.message}</span>);
    } else {
      responseValue = (<span className="prompt__response">{this.props.responseValue}</span>);
    }
    return (
      <div className="prompt">
        {errorMsg}
        {message}
        {input}
        {responseValue}
      </div>
    )
  }
});
