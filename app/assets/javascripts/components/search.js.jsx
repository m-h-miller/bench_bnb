var Search = React.createClass({

  getInitialState: function () {
    return { activeBench: null };
  },

  setActiveBench: function (bench) {
    this.setState({ activeBench: bench });
  },

  clickHandler: function (coords) {
    this.props.history.pushState(null, "api/bench/new", coords);
  },

  render: function () {
    return(
      <div>
        <Map clickHandler={ this.clickHandler } activeBench={ this.state.activeBench } />
        <Index setActiveBench={ this.setActiveBench }/>
      </div>
    );
  }
});
