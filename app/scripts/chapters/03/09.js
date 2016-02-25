import React from 'react';
import MultiPrompt from './../../components/multiPrompt.js';

import pluralizeNoun from './../../util/pluralizeNoun.js';
import getArea from './../../util/getArea';

export default React.createClass({
  getInitialState: function() {
    return {answer: ''};
  },
  paintNeeded(userInput) {
    const paintCoverage = 350; //per gallon
    const ceilHt = Number(userInput[0]);
    const width = Number(userInput[1]);
    const length = Number(userInput[1]);
    const area  = getArea(width, ceilHt)*2 + getArea(length, ceilHt)*2;
    const gallons = Math.ceil(area/paintCoverage);
    this.setState({answer: `
      You will need to purchase ${gallons} ${gallons !== 1 ? pluralizeNoun('gallon') : 'gallon'} of paint to cover ${area} square feet.
       `
     });
  },
  render() {
    return (
      <div>
        <MultiPrompt
          fresh={this.props.fresh}
          messages={[
            'How tall are your ceilings?',
            'How wide is the room?',
            'How long is the room?'
          ]}
          validateInput={Number}
          response={this.paintNeeded}
          responseValue={this.state.answer}/>
      </div>
    )
  }
})
