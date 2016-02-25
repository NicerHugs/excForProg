import React from 'react';
import IndefinitePrompt from './../../components/indefinitePrompt.js';

import moneyFormat from './../../util/money.js';

export default React.createClass({
  getInitialState: function() {
    return {answer: ''};
  },
  calcTotals(userInput) {
    const subTotal = userInput.reduce((acum, curr) => {return Number(acum) + Number(curr[0])*Number(curr[1])},0)
    const tax = subTotal * .055;
    const total = subTotal + tax;
    const answer = `Subtotal: ${moneyFormat(subTotal)}, Tax: ${moneyFormat(tax)}, Total: ${moneyFormat(total)}`
    this.setState({answer});
  },
  validateInput(input) {
    return (Number(input) || input === 'done');
  },
  render() {
    return (
      <div>
        <IndefinitePrompt
          fresh={this.props.fresh}
          messages={[
            'Enter the price of the item',
            'Enter the quanitity of the item'
          ]}
          validateInput={this.validateInput}
          response={this.calcTotals}
          responseValue={this.state.answer}/>
      </div>
    )
  }
})
