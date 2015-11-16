var BenchForm = React.createClass({
  getInitialState: function() {
    var lat, lng;
    if (this.props.location.query.lat) {
      lat = this.props.location.query.lat;
      lng = this.props.location.query.lng;
    } else {
      lat = 40;
      lat = -73;
    }
    return {lat: lat, lng: lng, description: "A bench.", seating: 1};
  },

  redirectHome: function () {
    this.props.history.pushState(null, "/");
  },

  handleDescriptionChange: function(e) {
    this.setState({description: e.currentTarget.value});
  },

  handleSubmit: function () {
    ApiUtil.createBench(this.state);
    this.redirectHome();
  },

  handleLatChange: function (e) {
    this.setState({lat: e.currentTarget.value});
  },

  handleLngChange: function(e) {
    this.setState({lng: e.currentTarget.value});
  },

  handleSeatingChange: function (e) {
    this.setState({seating: e.currentTarget.value});
  },

  render: function(){
    return(
      <div>
        <form className="bench-form">
          <h3> Submit a new bench: </h3>
          <label> Latitude:
            <input onChange={this.handleLatChange} value={this.state.lat} />
          </label>

          <label> Longitude:
            <input onChange={this.handleLngChange} value={this.state.lng}/>
          </label>

          <label> Seating:
            <input onChange={this.handleSeatingChange} value={this.state.seating} />
          </label>

          <label> Description:
            <textarea rows={6} cols={21} onChange={this.handleDescriptionChange} value={this.state.description}></textarea>
          </label>

          <button onClick={this.handleSubmit} > Submit </button>
        </form>
        <button onClick={this.redirectHome}> Return to Map </button>
      </div>
    );
  }
});
