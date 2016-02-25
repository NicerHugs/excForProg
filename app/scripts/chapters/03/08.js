import React from 'react';
import MultiPrompt from './../../components/multiPrompt.js';

import pluralizeNoun from './../../util/pluralizeNoun.js';
import pluralizeVerb from './../../util/pluralizeVerb.js';

export default React.createClass({
  getInitialState: function() {
    return {answer: ''};
  },
  dividePizza(userInput) {
    const people = Number(userInput[0]);
    const pizzas = Number(userInput[1]);
    const slices = pizzas*8;
    const slicesPer = Math.floor(slices/people);
    const leftovers = slices%people;
    this.setState({answer: `
      ${people} ${people !== 1 ? pluralizeNoun('person') : 'person'} with ${pizzas} ${pizzas !== 1 ? pluralizeNoun('pizza') : 'pizza'}
       Each person gets ${slicesPer} ${slicesPer !== 1 ? pluralizeNoun('slice') : 'slice'} of pizza.
       There ${leftovers !== 1 ? pluralizeVerb('is') : 'is'} ${leftovers} leftover ${leftovers !== 1 ? pluralizeNoun('slice') : 'slice'}.
       `
     });
  },
  render() {
    return (
      <div>
        <MultiPrompt
          fresh={this.props.fresh}
          messages={[
            'How many people are there?',
            'How many pizzas are there?'
          ]}
          validateInput={Number}
          response={this.dividePizza}
          responseValue={this.state.answer}/>
      </div>
    )
  }
})
