import React from 'react';
import ResetMixin from './../mixins/resetMixin.js';

import Prompt from './prompt.js';

export default React.createClass({
  mixins: [ResetMixin],
  getInitialState() {
    return {
      userResponded: false,
      userResponses: [],
      index: 0
    };
  },
  updatePrompt(userInput) {
    this.setState({
      userResponses: this.state.userResponses.concat([userInput]),
      index: this.state.index + 1
    });
    if (this.state.index+1 === this.props.messages.length) {
      this.setState({userResponded: true})
      this.props.response(this.state.userResponses.concat([userInput]));
    }
  },
  render() {
    let prompt;
    let responseValue;
    if (this.state.userResponded) {
      responseValue = this.props.responseValue;
    } else {
      prompt = <Prompt
        validateInput={this.props.validateInput}
        message={this.props.messages[this.state.index]}
        response={this.updatePrompt}
        fresh={true} />
    }
    return (
      <div>
        {prompt}
        {responseValue}
      </div>
    )
  }
});
