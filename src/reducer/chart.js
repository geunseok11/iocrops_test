export const initialState = {
  chart: [],

  loadChartLoading: false,
  loadChartDone: false,
  loadChartError: null,

  loadChart2Loading: false,
  loadChart2Done: false,
  loadChart2Error: null,
};

export const LOAD_CHART_REQUEST = "LOAD_CHART_REQUEST";
export const LOAD_CHART_SUCCESS = "LOAD_CHART_SUCCESS";
export const LOAD_CHART_FAILURE = "LOAD_CHART_FAILURE";

export const LOAD_CHART2_REQUEST = "LOAD_CHART2_REQUEST";
export const LOAD_CHART2_SUCCESS = "LOAD_CHART2_SUCCESS";
export const LOAD_CHART2_FAILURE = "LOAD_CHART2_FAILURE";

export const loadChart = (data) => {
  console.log("loadChart: data", data);
  return {
    type: LOAD_CHART_REQUEST,
    data,
  };
};

export const loadChart2 = (data) => {
  console.log("loadChart2: data", data);
  return {
    type: LOAD_CHART2_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHART_REQUEST:
      console.log("In REDUX, LOAD_CHART_REQUEST, action : ", action);
      return {
        ...state,
        loadChartLoading: true,
        loadChartDone: false,
        loadChartError: null,
      };
    case LOAD_CHART_SUCCESS:
      console.log("In REDUX, LOAD_CHART_SUCCESS, action : ", action);
      return {
        ...state,
        loadChartLoading: false,
        loadChartDone: true,
        chart: [action.data, ...state.chart],
      };
    case LOAD_CHART_FAILURE:
      console.log("In REDUX, LOAD_CHART_FAILURE, action : ", action);
      return {
        ...state,
        loadChartLoading: false,
        loadChartError: action.error,
      };

    case LOAD_CHART2_REQUEST:
      console.log("In REDUX, LOAD_CHART2_REQUEST, action : ", action);
      return {
        ...state,
        loadChart2Loading: true,
        loadChart2Done: false,
        loadChart2Error: null,
      };
    case LOAD_CHART2_SUCCESS:
      console.log("In REDUX, LOAD_CHART2_SUCCESS, action : ", action);
      return {
        ...state,
        loadChart2Loading: false,
        loadChart2Done: true,
        chart: [action.data, ...state.chart],
      };
    case LOAD_CHART2_FAILURE:
      console.log("In REDUX, LOAD_CHART2_FAILURE, action : ", action);
      return {
        ...state,
        loadChart2Loading: false,
        loadChart2Error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
