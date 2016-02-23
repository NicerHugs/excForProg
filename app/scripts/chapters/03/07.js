import React from 'react';
import MultiPrompt from './../../components/multiPrompt.js';
import ResetMixin from './../../mixins/resetMixin.js';

import getArea from './../../util/getArea.js';
import convertToMetric from './../../util/convertToMetric.js';

export default React.createClass({
  mixins: [ResetMixin],
  getInitialState: function() {
    return {
      length: 0,
      width: 0
    };
  },
  updateLength(e) {
    this.setState({length: e.target.value});
  },
  updateWidth(e) {
    this.setState({width: e.target.value})
  },
  updateArea(e) {
    const len = Number(e.target.value);
  },
  render() {
    return (
      <form>
        <div>Length (in feet): <input value={this.state.length} type="text" onChange={this.updateLength} /></div>
        <div>Width (in feet): <input value={this.state.width} type="text" onChange={this.updateWidth} /></div>
        <div>Area (in square feet): {getArea(this.state.length || 0, this.state.width || 0)}</div>
        <div>Area (in square meters: {convertToMetric(getArea(this.state.length || 0, this.state.width || 0))}</div>
      </form>
    );
  }
});
