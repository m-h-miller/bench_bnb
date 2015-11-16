(function(root){
  var _benches = [];
  var CHANGE_EVENT = "change";

  var _resetBenches = function (benches) {
    _benches = benches;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice(0);
    },

    changed: function () {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {

      case BenchConstants.BENCHES_RECEIVED:
          _resetBenches(payload.benches);
          BenchStore.changed();
        break;

      }
    })
  });


})(this);
