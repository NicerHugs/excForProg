import React from 'react';
import MultiPrompt from './../../components/multiPrompt.js';

export default React.createClass({
  getInitialState: function() {
    return {
      answer:''
    };
  },
  calculateYears(responses) {
    let currAge = Number(responses[0]);
    let retireAge = Number(responses[1]);
    let diff = retireAge - currAge;
    let date = new Date();
    let year = Number(date.getFullYear());
    let retireYr = year + diff;
    let answer = diff <= 0 ? "You can retire now!" : (
      <ul>
        <li>You have {retireAge - currAge} years left until you can retire.</li>
        <li>It's {year}, so you can retire in {retireYr}</li>
      </ul>
    );
    this.setState({answer});
  },
  render() {
    return (
      <MultiPrompt
        fresh={this.props.fresh}
        messages={[
          'What is your current age?',
          'At what age would you like to retire?'
        ]}
        validateInput={Number}
        response={this.calculateYears}
        responseValue={this.state.answer}/>
    );
  }
})
