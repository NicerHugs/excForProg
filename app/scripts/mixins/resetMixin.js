export default {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fresh) {
      this.setState(this.getInitialState());
    }
  }
};
