import { all, fork } from "redux-saga/effects";
import axios from "axios";
import chartSaga from "./chart";

axios.defaults.baseURL =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ada77c5d-fd46-402f-a014-0a0bd8052104/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201118T073226Z&X-Amz-Expires=86400&X-Amz-Signature=b0a840d360911f310bf43a00a1713ff5464e4c741910d1200214bd8f8749fee3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22";
//   "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1da547de-1912-4183-9f35-27857575d2b5/data1.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201118T073232Z&X-Amz-Expires=86400&X-Amz-Signature=35a0c4df8a544525b637083d1dcb8a5c125d6f27b57dab1c0297d4a7e428b51f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data-1.json%22"

export default function* rootSaga() {
  yield all([fork(chartSaga)]);
}
