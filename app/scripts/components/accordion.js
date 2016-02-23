import React from 'react';
import Transition from 'react-addons-css-transition-group';

var giveKey = function(element) {
  return React.cloneElement(element, {key: Date.now()});
};

export default React.createClass({
  getInitialState() {
    return {
      expanded: false
    };
  },
  toggleAccordion(e) {
    this.setState({expanded: !this.state.expanded});
  },
  render() {
    let children;
    if (this.state.expanded) {
      children = React.Children.map(this.props.children, giveKey);
    }
    return (
      <ul className="accordion">
        <h5 className="accordion__title" onClick={this.toggleAccordion}>{this.props.title}</h5>
        <Transition transitionName="slideDown" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {children}
        </Transition>
      </ul>
    )
  }
})
