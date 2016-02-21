import React from 'react';
import Prompt from './../../components/prompt';

export default React.createClass({
  hello(name) {
    return `Hi ${name}, it's nice to meet you!`;
  },
  render() {
    return (
      <div>
        <Prompt
          fresh={this.props.fresh}
          message="What is your name?"
          response={this.hello}/>
      </div>
    );
  }
});
