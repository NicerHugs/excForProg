import React from 'react';

//exercises pass along a fresh property that when true will cause the child to reset it's state to initial.
export default React.createClass({
  getInitialState() {
    return {
      resetting: false,
    }
  },
  resetExercise() {
    this.setState({resetting: true});
    window.setTimeout( () => this.setState({resetting: false}, 0));
  },
  render() {
    let Child = require(`./../chapters/${this.props.chapter}/${this.props.exercise}.js`).default;
    return (
      <div>
        <h6>Exercise {this.props.exercise}</h6>
        <input type="button" value="reset" onClick={this.resetExercise} />
        <Child fresh={this.state.resetting}/>
      </div>
    )
  }
});
