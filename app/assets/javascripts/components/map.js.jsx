var Map = React.createClass({

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.725321, lng: -73.996791},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    BenchStore.addChangeListener(this._placeMapMarkers);

    this.map.addListener('idle', function (){
      var LatLng = this.map.getBounds();
      var NorthEast = LatLng.getNorthEast();
      var SouthWest = LatLng.getSouthWest();
      var bounds = {
        northEast: { lat: NorthEast.lat(), lng: NorthEast.lng() },
        southWest: { lat: SouthWest.lat(), lng: SouthWest.lng() }
      };
      ApiUtil.fetchBenches(bounds);
    }.bind(this));
  },

  _placeMapMarkers: function () {
    BenchStore.all().map(function (bench) {
      new google.maps.Marker({
        position: { lat: bench.lat, lng: bench.lng },
        map: this.map,
        title: 'Hello World!'
      });
    }.bind(this));
  },



  render: function () {
    return(
      <div className="map" ref="map">
      </div>
    );
  }
});
