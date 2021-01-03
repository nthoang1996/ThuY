import { put, takeLatest, select } from "redux-saga/effects";
import * as actions from "./action";
import * as data from "../../data.json";
import { jsonServerHost, baseHost } from "../../data_static";

const fs = require("fs");
const axios = require("axios");

const getState = (state) => state.app;

function* getCurrentUserInfo() {
  let data = {};
  let status = "";
  const state = yield select(getState);

  yield axios
    .get(`${jsonServerHost}/users?id=${state.currentUser.id}`)
    .then(function (res) {
      data = res.data;
      status = "success";
    })
    .catch(function (error) {
      console.log(error);
    });

  if (status == "success")
    yield put({
      type: actions.GET_CURRENT_USER_INFO_SUCCESS,
      currentUser: data,
    });
}

export function* getCurrentUserInfoSaga() {
  yield takeLatest(actions.GET_CURRENT_USER_INFO, getCurrentUserInfo);
}

function* getUserInfo(id) {
  let data = {};
  let status = "";
  yield axios
    .get(`${jsonServerHost}/user?id=${id}`)
    .then(function (res) {
      data = res.data;
      status = "success";
    })
    .catch(function (error) {
      console.log(error);
    });

  if (status == "success")
    yield put({
      type: actions.GET_USER_INFO_SUCCESS,
      reservationInfo: data,
    });
}

export function* getUserInfoSaga() {
  yield takeLatest(actions.GET_USER_INFO, getUserInfo);
}

function* getNewReservation(action) {
  console.log("123456");
  let data = {};
  let status = "";
  yield axios
    .get(`${jsonServerHost}/newReservation`)
    .then(function (res) {
      data = res.data;
      status = "success";
    })
    .catch(function (error) {
      console.log(error);
    });

  if (status == "success")
    yield put({
      type: actions.GET_NEW_RESERVATION_SUCCESS,
      newReservation: data,
    });
}

export function* getNewReservationSaga() {
  yield takeLatest(actions.GET_NEW_RESERVATION, getNewReservation);
}

function* updateNewReservation(action) {
  yield put({
    type: actions.UPDATE_NEW_RESERVATION_SUCCESS,
    newReservation: action.newReservation,
  });
}

export function* updateNewReservationSaga() {
  yield takeLatest(actions.UPDATE_NEW_RESERVATION, updateNewReservation);
}

function* addNewReservation(action) {
  const newReservation = action.newReservation;
  const phonenumberFormat = /^\d{10}$/;
  const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const formValidation = {
    customerName: {
      isEmpty:
        newReservation.customerName == "" ||
        !newReservation.customerName.trim(),
    },
    customerPhoneNumber: {
      isEmpty:
        newReservation.customerPhoneNumber == "" ||
        !newReservation.customerPhoneNumber.trim(),
      isInvalid:
        (newReservation.customerPhoneNumber.trim() &&
          !newReservation.customerPhoneNumber.match(phonenumberFormat)) ||
        newReservation.customerPhoneNumber[0] != "0",
    },
    customerEmail: {
      isInvalid:
        newReservation.customerEmail &&
        !newReservation.customerEmail.match(emailFormat),
    },
    reservationDate: {
      isEmpty: newReservation.reservationDate == "",
      isInvalid:
        newReservation.reservationDate &&
        new Date(newReservation.reservationDate) < new Date(),
    },
    reservationTime: {
      isEmpty: newReservation.reservationTime == "",
      isInvalid: false,
    },
  };
  const isValidateData = !(
    formValidation.customerName.isEmpty ||
    formValidation.customerName.isInvalid ||
    formValidation.customerPhoneNumber.isEmpty ||
    formValidation.customerPhoneNumber.isInvalid ||
    formValidation.customerEmail.isInvalid ||
    formValidation.reservationDate.isEmpty ||
    formValidation.reservationDate.isInvalid ||
    formValidation.reservationTime.isEmpty ||
    formValidation.reservationTime.isInvalid
  );

  if (!isValidateData)
    yield put({
      type: actions.ADD_NEW_RESERVATION_ERROR,
      formValidation,
    });
  else {
    let data = [];
    let status = "";
    yield axios
      .post(`${jsonServerHost}/newReservation`, {
        isEmpty: false,
        customerName: newReservation.customerName,
        customerPhoneNumber: newReservation.customerPhoneNumber,
        customerEmail: newReservation.customerEmail,
        customerMessage: newReservation.customerMessage,
        branch: newReservation.branch,
        reservationDate: newReservation.reservationDate,
        reservationTime: newReservation.reservationTime,
        service: newReservation.service,
        petType: newReservation.petType,
        petSymptoms: newReservation.petSymptoms,
        isConfrimed: false,
        isFinished: false,
        userId: newReservation.userId,
      })
      .then(function (res) {
        data = res.data;
        status = "success";
      })
      .catch(function (error) {
        console.log(error);
      });
    if (status == "success") {
      yield put({
        type: actions.ADD_NEW_RESERVATION_SUCCESS,
      });
      window.location.replace(`${baseHost}/booking/confirm`);
    }
  }
}

export function* addNewReservationSaga() {
  yield takeLatest(actions.ADD_NEW_RESERVATION, addNewReservation);
}

function* addReservation(action) {
  const newReservation = action.newReservation;
  let data = [];
  let status = "";
  yield axios
    .post(`${jsonServerHost}/reservations`, {
      customerName: newReservation.customerName,
      customerPhoneNumber: newReservation.customerPhoneNumber,
      customerEmail: newReservation.customerEmail,
      customerMessage: newReservation.customerMessage,
      branch: newReservation.branch,
      reservationDate: newReservation.reservationDate,
      reservationTime: newReservation.reservationTime,
      service: newReservation.service,
      petType: newReservation.petType,
      petSymptoms: newReservation.petSymptoms,
      isConfrimed: false,
      isFinished: false,
      userId: newReservation.userId,
    })
    .then(function (res) {
      data = res.data;
      status = "success";
    })
    .catch(function (error) {
      console.log(error);
    });
  if (status == "success") {
    yield put({
      type: actions.ADD_RESERVATION_SUCCESS,
    });
    yield axios
      .post(`${jsonServerHost}/newReservation`, {})
      .then(function (res) {
        data = res.data;
        status = "success";
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.replace(`${baseHost}/booking/success`);
  }
}

export function* addReservationSaga() {
  yield takeLatest(actions.ADD_RESERVATION, addReservation);
}

function* setCurrentUserId(action) {
  let data = [];
  let status = "";
  yield axios
    .put(`${jsonServerHost}/currentUser`, {
      id: action.currentUserId,
    })
    .then(function (res) {
      data = res.data;
      status = "success";
    })
    .catch(function (error) {
      console.log(error);
    });
  if (status === "success") {
    yield put({
      type: actions.SET_CURRENT_USER_SUCCESS,
      currentUserId: action.currentUserId,
    });
  }
}

export function* setCurrentUserIdSaga() {
  yield takeLatest(actions.SET_CURRENT_USER, setCurrentUserId);
}


function* getDiseaseHistory(action) {
  const id=action.id
  let data = [];
  let status = "";
  yield axios
    .get(`${jsonServerHost}/diseaseHistorys?userId=${id}`)
    .then(function (res) {
      data = res.data;
      status = "success";
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(status == "success")

  if (status == "success")
    yield put({
      type: actions.GET_DISEASE_HISTORY_INFO_SUCCESS,
      diseaseHistory: data,
    });
}



export function* getDiseaseHistorySaga() {
  yield takeLatest(actions.GET_DISEASE_HISTORY_INFO, getDiseaseHistory);
}

function* addDiseaseHistory(action) {
  const evaluate= action.newDiseaseHistory;
console.log("evaluate",evaluate);
    let status = "";
    yield axios
      .put(`${jsonServerHost}/diseaseHistorys/${evaluate.id}`, {
        id:evaluate.id,
        star:evaluate.star,
        service:evaluate.service,
        pet:evaluate.pet,
        time:evaluate.time,
        status:true,
        customerName:evaluate.customerName,
        doctorName:evaluate.doctorName,
        userId:evaluate.id,
        comment:evaluate.comment,
        cost:evaluate.cost
      })
      .then(function (res) {
        data = res.data;
        status = "success";
      })
      .catch(function (error) {
        console.log(error);
      });
    if (status == "success")
      yield put({
        type: actions.ADD_NEW_DISEASE_HISTORY_SUCCESS,

      });
  
}

  export function* addDiseaseHistorySaga() {
    yield takeLatest(actions.ADD_NEW_DISEASE_HISTORY, addDiseaseHistory);
  }

  function* getCustomerReview() {
    let data = {};
    let status = "";
    const state = yield select(getState);
  
    yield axios
      .get(`${jsonServerHost}/customerReview`)
      .then(function (res) {
        data = res.data;
        status = "success";
      })
      .catch(function (error) {
        console.log(error);
      });
  
    if (status == "success")
      yield put({
        type: actions.GET_CUSTOMER_REVIEW_SUCCESS,
        customerReview: data,
      });
  }
  
  export function* getCustomerReviewSaga() {
    yield takeLatest(actions.GET_CUSTOMER_REVIEW, getCustomerReview);
  }
  
  