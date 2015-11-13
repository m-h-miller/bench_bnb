(function(){
  var ApiUtil = window.ApiUtil = {
    fetchBenches: function () {
      $.ajax({
        url: 'api/bench',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          ApiActions.receiveAll(data);
        }
      });
    }
  };

})();
