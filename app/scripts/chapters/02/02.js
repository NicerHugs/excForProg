import React from 'react';
import Prompt from './../../components/prompt.js';

export default React.createClass({
  getInitialState() {
    return {answer: ''}
  },
  stringLength(string) {
    if (!string.length) {
      this.setState({answer: 'Please click reset and enter a value'});
    }
    this.setState({answer: `${string} has ${string.length} characters.`});
  },
  render() {
    return (
      <div>
        <Prompt
          fresh={this.props.fresh}
          message="What is the input string?"
          response={this.stringLength}
          responseValue={this.state.answer}/>
      </div>
    )
  }
})
