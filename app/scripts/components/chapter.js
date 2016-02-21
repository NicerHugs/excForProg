import React from 'react';

export default React.createClass({
  render() {
    let chapterFn = require(`./../chapters/${this.props.num}.js`).default;
    return (
      <p>
        {chapterFn()}
      </p>
    )
  }
})
