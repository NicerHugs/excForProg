import React from 'react';
import MultiPrompt from './../../components/multiPrompt.js';

export default React.createClass({
  getInitialState: function() {
    return {
      answer:''
    };
  },
  doMath(responses) {
    let num1 = Number(responses[0]);
    let num2 = Number(responses[1]);
    this.setState({answer: (
      <ul>
        <li>{num1} + {num2} = {num1+num2}</li>
        <li>{num1} - {num2} = {num1-num2}</li>
        <li>{num1} * {num2} = {num1*num2}</li>
        <li>{num1} / {num2} = {num1/num2}</li>
      </ul>
    )})
  },
  render() {
    return (
      <MultiPrompt
        fresh={this.props.fresh}
        messages={[
          'What is the first number?',
          'What is the second number?'
        ]}
        validateInput={Number}
        response={this.doMath}
        responseValue={this.state.answer}/>
    );
  }
})
