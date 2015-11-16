ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  benchCreated: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_CREATED,
      bench: bench
    });
  }


};
