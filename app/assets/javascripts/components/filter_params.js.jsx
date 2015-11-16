var FilterParams = React.createClass({
  getInitialState: function () {
    return {
      minSeats: 0,
      maxSeats: 99
    };
  },

  updateFilterParams: function () {
    var newParams = Object.assign({}, this.state);
    FilterActions.updateFilterParams(newParams);
  },

  _onChange: function (e) {
    var target = e.target;
    var attr = target.dataset.attr;
    this.state[attr] = target.value;

    this.updateFilterParams();
  },

  componentDidMount: function() {
    this.updateFilterParams();
  },

  componentDidUpdate: function() {
    this.updateFilterParams();
  },

  render: function () {
    return(
      <div className="filter-params">
        <h3>Seating: </h3>

        <label> Min:
          <input type="number" data-attr="minSeats" value={this.state.minSeats} onChange={this._onChange} />
        </label>

        <label> Max:
          <input type="number" data-attr="maxSeats" value={this.state.maxSeats} onChange={this._onChange} />
        </label>
      </div>
    );
  }
});
