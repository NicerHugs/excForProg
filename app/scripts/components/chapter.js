import React from 'react';

import Exercise from './exercise.js';
import zeroPad from './../util/zeroPad.js';

export default React.createClass({
  render() {
    let exercises = this.props.exercises.map((exercise, index) => {
      let exerciseNum = exercise.substr(0,2);
      return (
        <Exercise key={index} chapter={this.props.num} title={exercise} exercise={exerciseNum}/>
      )
    });
    return (
      <div>
        {exercises}
      </div>
    )
  }
})
