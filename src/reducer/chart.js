export const initialState = {
  chart: [],

  loadChartLoading: false,
  loadChartDone: false,
  loadChartError: null,
};

export const LOAD_CHART_REQUEST = "LOAD_CHART_REQUEST";
export const LOAD_CHART_SUCCESS = "LOAD_CHART_SUCCESS";
export const LOAD_CHART_FAILURE = "LOAD_CHART_FAILURE";

export const loadChart = (data) => {
  return {
    type: LOAD_CHART_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHART_REQUEST:
      return {
        ...state,
        loadChartLoading: true,
        loadChartDone: false,
        loadChartError: null,
      };
    case LOAD_CHART_SUCCESS:
      return {
        ...state,
        loadChartLoading: false,
        loadChartDone: true,
        chart: action.data,
      };
    case LOAD_CHART_FAILURE:
      return {
        ...state,
        loadChartLoading: false,
        loadChartError: action.error,
      };
  }
};
