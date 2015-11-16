var Map = React.createClass({

  componentDidMount: function () {
    this.markers = [];
    BenchStore.addChangeListener(this._change);
    this.initializeMap();
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.activeBench) {
      var marker = this.findMarkerByDesc(newProps.activeBench.description);
      this.animateMarker(marker);
    } else {
      this.markers.forEach(function(marker){
        this.pauseMarker(marker);
      }, this);
    }
  },

  findMarkerByDesc: function (desc) {
    var target;
    this.markers.some(function(marker){
      if (marker.title === desc ) {
        target = marker;
        return true;
      }
    });
    return target;
  },

  initializeMap: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.725321, lng: -73.996791},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('idle', function (e){
      var bounds = this.map.getBounds();
      bounds = this.formatBounds(bounds);
      var filterParams = FilterStore.all();
      ApiUtil.fetchBenches(bounds, filterParams);
    }.bind(this));

    this.map.addListener("click", function (e){
      var lat = e.latLng.lat();
      var lng = e.latLng.lng();
      var coords = { lat: lat, lng: lng};
      this.props.clickMapHandler(coords);
    }.bind(this));
  },

  formatBounds: function (bounds) {
    var NorthEast = bounds.getNorthEast();
    var SouthWest = bounds.getSouthWest();

    return {
      northEast: { lat: NorthEast.lat(), lng: NorthEast.lng() },
      southWest: { lat: SouthWest.lat(), lng: SouthWest.lng() }
    };
  },

  _placeMapMarkers: function () {
    var benches = BenchStore.all();

    benches.forEach(function(bench){
      this.markers.push(this.createBenchMarker(bench));
    }, this);

    this.markers.forEach(function(marker){
      marker.setMap(this.map);
    }, this);
  },

  createBenchMarker: function (bench) {
    var LatLng = {lat: bench.lat, lng: bench.lng};
    var map = this.refs.map;

    var newMarker = new google.maps.Marker({
      position: LatLng,
      title: bench.description,
      animation: google.maps.Animation.DROP,
    });

    newMarker.addListener("mouseover", this.animateMarker(newMarker));
    newMarker.addListener("mouseout", this.pauseMarker(newMarker));

    return newMarker;
  },

  removeMarkers: function () {
    this.markers.forEach(function(marker){
      marker.setMap(null);
    });
    this.markers = [];
  },

  animateMarker: function (marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  },

  pauseMarker: function (marker) {
    marker.setAnimation(null);
  },

  _change: function () {
    this.removeMarkers();
    this._placeMapMarkers();
  },

  render: function () {
    return(
      <div className="map" ref="map"></div>
    );
  }
});
