var IndexItem = React.createClass({
  getInitialState: function () {
    return {className: "index-item"};
  },

  handleHover: function(e) {
    this.props.setActiveBench(this.props.bench);
    this.setState({className: "index-item hovered"});
  },

  handleLeave: function(e) {
    this.props.setActiveBench(null);
    this.setState({className: "index-item"});
  },

  render: function () {
    return (
      <li className={this.state.className} onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
        {this.props.bench.description}
      </li>
    );
  }
});
