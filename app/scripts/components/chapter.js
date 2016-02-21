import React from 'react';

import Exercise from './exercise.js';
import zeroPad from './../util/zeroPad.js';

export default React.createClass({
  render() {
    let exercises = this.props.exercises.map((exercise, index) => {
      let exerciseNum = zeroPad(index);
      return (
        <Exercise key={index} chapter={this.props.num} exercise="01"/>
      )
    });
    return (
      <div>
        {exercises}
      </div>
    )
  }
})
