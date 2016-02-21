import React from 'react';

export default React.createClass({
  render() {
    return (
      <li>
        <h5>{this.props.title}</h5>
        <div>{this.props.children}</div>
      </li>
    )
  }
})
