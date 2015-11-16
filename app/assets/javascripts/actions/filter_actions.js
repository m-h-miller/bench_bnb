FilterActions = {
  updateFilterParams: function (params) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTERS_RECEIVED,
      params: params
    });
  },
};
