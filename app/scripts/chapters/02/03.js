import React from 'react';
import MultiPrompt from './../../components/multiPrompt.js';

export default React.createClass({
  getInitialState() {
    return {answer: ''}
  },
  quoteAndAuthor(responses) {
    this.setState({answer: `${responses[1]} says: "${responses[0]}"`});
  },
  render() {
    return (
      <MultiPrompt
        fresh={this.props.fresh}
        messages={[
          'What is the quote?',
          'Who said it?'
        ]}
        response={this.quoteAndAuthor}
        responseValue={this.state.answer}/>
    )
  }
})
