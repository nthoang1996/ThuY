import { all } from "redux-saga/effects";
import {
  getUserInfoSaga,
  getCurrentUserInfoSaga,
  getNewReservationSaga,
  updateNewReservationSaga,
  addNewReservationSaga,
  addReservationSaga,
  setCurrentUserIdSaga,
  getDiseaseHistorySaga,
  addDiseaseHistorySaga,
  getCustomerReviewSaga
  
} from "./App/saga";

export function* rootSaga() {
  yield all([
    getUserInfoSaga(),
    getCurrentUserInfoSaga(),
    getNewReservationSaga(),
    updateNewReservationSaga(),
    addNewReservationSaga(),
    addReservationSaga(),
    setCurrentUserIdSaga(),
    getDiseaseHistorySaga(),
    addDiseaseHistorySaga(),
    getCustomerReviewSaga()
  ]);
}

export default rootSaga;
