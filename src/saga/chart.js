import axios from "axios";
import {
  LOAD_CHART_REQUEST,
  LOAD_CHART_SUCCESS,
  LOAD_CHART_FAILURE,
  LOAD_CHART2_REQUEST,
  LOAD_CHART2_SUCCESS,
  LOAD_CHART2_FAILURE,
} from "../reducer/chart";
import { all, fork, call, put, takeLatest } from "redux-saga/effects";

function loadChartAPI(data) {
  console.log("loadChartAPI: data", data);
  return axios.get(
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ada77c5d-fd46-402f-a014-0a0bd8052104/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201118T073226Z&X-Amz-Expires=86400&X-Amz-Signature=b0a840d360911f310bf43a00a1713ff5464e4c741910d1200214bd8f8749fee3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22"
  );
}

function loadChart2API(data) {
  console.log("loadChart2API: data", data);
  return axios.get(
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1da547de-1912-4183-9f35-27857575d2b5/data1.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201118T073232Z&X-Amz-Expires=86400&X-Amz-Signature=35a0c4df8a544525b637083d1dcb8a5c125d6f27b57dab1c0297d4a7e428b51f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data-1.json%22"
  );
}

function* loadChart(action) {
  console.log("In SAGA, loadChartAPI, action : ", action);
  try {
    const result = yield call(loadChartAPI, action.data);
    console.log("In SAGA, loadChart, result : ", result);
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

function* loadChart2(action) {
  console.log("In SAGA, loadChart2API, action : ", action);
  try {
    const result = yield call(loadChart2API, action.data);
    console.log("In SAGA, loadChart2, result : ", result);
    yield put({
      type: LOAD_CHART2_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_CHART2_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadChart() {
  console.log("watchLoadChart");
  yield takeLatest(LOAD_CHART_REQUEST, loadChart);
}

function* watchLoadChart2() {
  console.log("watchLoadChart2");
  yield takeLatest(LOAD_CHART2_REQUEST, loadChart2);
}

export default function* chartSaga() {
  yield all([fork(watchLoadChart), fork(watchLoadChart2)]);
}
