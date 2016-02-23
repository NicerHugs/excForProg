import React from 'react';
import MultiPrompt from './../../components/multiPrompt.js';

import getArea from './../../util/getArea.js';
import convertToMetric from './../../util/convertToMetric.js';

export default React.createClass({
  getInitialState: function() {
    return {
      answer:''
    };
  },
  calculateAnswer(responses) {
    const length = responses[0];
    const width = responses[1];
    const area = getArea(length, width);
    const metricArea = convertToMetric(area);
    const answer = `
      You entered dimensions of ${length} feet by ${width} feet.
      The area is ${area} square feet
      ${metricArea} square meters`;
    this.setState({answer})
  },
  render() {
    return (
      <MultiPrompt
        fresh={this.props.fresh}
        messages={[
          'What is the length of the room in feet?',
          'What is the width of the room in feet?'
        ]}
        validateInput={Number}
        response={this.calculateAnswer}
        responseValue={this.state.answer}/>
    );
  }
});
