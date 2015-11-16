(function(){
  var ApiUtil = window.ApiUtil = {
    fetchBenches: function (bounds, filterParams) {
      $.ajax({
        url: 'api/bench',
        type: 'GET',
        data: {bounds: bounds, filterParams: filterParams},
        dataType: 'json',
        success: function (data) {
          ApiActions.receiveAll(data);
        }
      });
    },

    createBench: function (bench) {
      data = {bench: bench};
      $.ajax({
        url: 'api/bench',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function (bench) {
          ApiActions.benchCreated(bench);
        }
      });
    }


  };
})();
