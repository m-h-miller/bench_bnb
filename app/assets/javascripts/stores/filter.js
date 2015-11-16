(function(root){
  var _filters = {};
  var CHANGE_EVENT = "filter_change";

  var _resetFilters = function (newFilters) {
    _filters = Object.assign({}, _filters, newFilters);
  };

  root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _filters;
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

      case FilterConstants.FILTERS_RECEIVED:
          _resetFilters(payload.params);
          FilterStore.changed();
        break;
      }
    })
  });

})(this);
