import React from 'react';
import MultiPrompt from './../../components/multiPrompt.js';

export default React.createClass({
  getInitialState: function() {
    return {answer: ''};
  },
  madLib(responses) {
    this.setState({answer: `Do you ${responses[1]} your ${responses[2]} ${responses[0]} quickly? That's hilarious!`});
  },
  render() {
    return (
      <div>
        <MultiPrompt
          fresh={this.props.fresh}
          messages={[
            'Enter a noun:',
            'Enter a verb:',
            'Enter an adjective:',
          ]}
          response={this.madLib}
          responseValue={this.state.answer}/>
      </div>
    )
  }
})
