import React from 'react';
import Prompt from './../../components/prompt.js';

export default React.createClass({
  getInitialState() {
    return {
      quote: ''
    }
  },
  recieveQuote(string) {
    if (string) {
      this.setState({quote: string})
    }
    return '';
  },
  recieveAuthor(author) {
    if (author) {
      return author + ' says, "' + this.state.quote + '"';
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.fresh) {
      this.setState({quote: ''})
    }
  },
  render() {
    let quotePrompt = this.state.quote ? undefined : (
      <Prompt
        fresh={this.props.fresh}
        message="What is the quote?"
        response={this.recieveQuote}/>
    );
    let authorPrompt = this.state.quote ? (
      <Prompt
        fresh={this.props.fresh}
        message="Who said it?"
        response={this.recieveAuthor}/>
    ) : undefined;
    return (
      <div>
        {quotePrompt}
        {authorPrompt}
      </div>
    );
  }
})
