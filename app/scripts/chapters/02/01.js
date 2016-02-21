import React from 'react';
import Prompt from './../../components/prompt';

export default React.createClass({
  render() {
    let hello = function(name) {
      return `Hi ${name}, it's nice to meet you!`;
    }

    return (
      <div>
        <Prompt
          fresh={this.props.fresh}
          message="What is your name?"
          response={hello}/>
      </div>
    );
  }
});
