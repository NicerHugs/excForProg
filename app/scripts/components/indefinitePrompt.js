import React from 'react';
import ResetMixin from './../mixins/resetMixin.js';

import MultiPrompt from './multiPrompt.js';

export default React.createClass({
  mixins: [ResetMixin],
  getInitialState() {
    return {
      userResponded: false,
      userResponses: [],
    };
  },
  updatePrompt(userInput) {
    if (userInput === 'done') {
      this.setState({userResponded: true});
      this.props.response(this.state.userResponses);
    } else {
      this.setState({userResponses: this.state.userResponses.concat([userInput])});
    }
  },
  validateInput(input) {
    if (input === 'done') {
      this.updatePrompt(input);
      return true;
    } else {
      return this.props.validateInput(input);
    }
  },
  render() {
    let instructions;
    instructions = this.state.userResponded ? instructions: "Type 'done' at any time to calculate the total"
    let prompt;
    let responseValue;
    if (this.state.userResponded) {
      responseValue = this.props.responseValue;
    } else {
      prompt = <MultiPrompt
        validateInput={this.validateInput}
        messages={this.props.messages}
        response={this.updatePrompt}
        fresh={true} />
    }
    return (
      <div>
        {instructions}
        {prompt}
        {responseValue}
      </div>
    )
  }
});
