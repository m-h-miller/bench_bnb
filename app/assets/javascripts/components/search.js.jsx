var Search = React.createClass({

  getInitialState: function () {
    return { activeBench: null };
  },

  setActiveBench: function (bench) {
    this.setState({ activeBench: bench });
  },

  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "benches/new", coords);
  },

  componentDidMount: function () {
    FilterStore.addChangeListener(this._change);
  },

  _change: function(){
    ApiUtil.fetchBenches(FilterStore.all());
  },

  render: function () {
    return(
      <div>
        <FilterParams />
        <Map clickMapHandler={ this.clickMapHandler } activeBench={ this.state.activeBench } />
        <Index setActiveBench={ this.setActiveBench }/>
      </div>
    );
  }
});
