import React from 'react';
import Prompt from './../../components/prompt.js';

export default React.createClass({
  stringLength(string) {
    if (!string.length) {
      return 'Please click reset and enter a value';
    }
    return `${string} has ${string.length} characters.`;
  },
  render() {
    return (
      <div>
        <Prompt
          fresh={this.props.fresh}
          message="What is the input string?"
          response={this.stringLength}/>
      </div>
    )
  }
})
