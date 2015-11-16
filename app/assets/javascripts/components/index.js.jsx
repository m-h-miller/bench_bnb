var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function() {
    debugger
    return (
      <div>
        <ul className="search-locations">
          {
            this.state.benches.map(function(bench){
              return <IndexItem setActiveBench={this.props.setActiveBench} key={bench.id} bench={bench}/>;
            }, this)
          }
        </ul>
      </div>
    );
  },
});
