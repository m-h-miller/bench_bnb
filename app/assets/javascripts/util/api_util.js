(function(){
  var ApiUtil = window.ApiUtil = {
    fetchBenches: function (bounds) {
      $.ajax({
        url: 'api/bench',
        type: 'GET',
        data: {bounds: bounds},
        dataType: 'json',
        success: function (data) {
          ApiActions.receiveAll(data);
        }
      });
    }
  };

})();
