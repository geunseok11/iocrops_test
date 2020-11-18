import axios from "axios";
import {
  LOAD_CHART_REQUEST,
  LOAD_CHART_SUCCESS,
  LOAD_CHART_FAILURE,
} from "../reducer/chart";
import { all, fork, call, put, takeLatest } from "redux-saga/effects";

function loadChartAPI(data) {
  return axios.get(data);
}

function* loadChart(action) {
  try {
    const result = yield call(loadChartAPI, action.data);
    yield put({
      type: LOAD_CHART_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_CHART_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadChart() {
  yield takeLatest(LOAD_CHART_REQUEST, loadChart);
}

export default function* chartSaga() {
  yield all([fork(watchLoadChart)]);
}
