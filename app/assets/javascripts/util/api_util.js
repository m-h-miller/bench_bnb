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
