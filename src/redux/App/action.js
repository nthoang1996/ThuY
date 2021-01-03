export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";

export const getUserInfo = (id) => ({
  type: GET_USER_INFO,
  id,
});

export const GET_CURRENT_USER_INFO = "GET_CURRENT_USER_INFO";
export const GET_CURRENT_USER_INFO_SUCCESS = "GET_CURRENT_USER_INFO_SUCCESS";

export const getCurrentUserInfo = () => ({
  type: GET_CURRENT_USER_INFO,
});

export const GET_NEW_RESERVATION = "GET_NEW_RESERVATION";
export const GET_NEW_RESERVATION_SUCCESS = "GET_NEW_RESERVATION_SUCCESS";

export const getNewReservation = () => ({
  type: GET_NEW_RESERVATION,
});

export const UPDATE_NEW_RESERVATION = "UPDATE_NEW_RESERVATION";
export const UPDATE_NEW_RESERVATION_SUCCESS = "UPDATE_NEW_RESERVATION_SUCCESS";

export const updateNewReservation = (newReservation) => ({
  type: UPDATE_NEW_RESERVATION,
  newReservation,
});

export const ADD_NEW_RESERVATION = "ADD_NEW_RESERVATION";
export const ADD_NEW_RESERVATION_SUCCESS = "ADD_NEW_RESERVATION_SUCCESS";
export const ADD_NEW_RESERVATION_ERROR = "ADD_NEW_RESERVATION_ERROR";

export const addNewReservation = (newReservation) => ({
  type: ADD_NEW_RESERVATION,
  newReservation,
});

export const ADD_RESERVATION = "ADD_RESERVATION";
export const ADD_RESERVATION_SUCCESS = "ADD_RESERVATION_SUCCESS";
export const ADD_RESERVATION_ERROR = "ADD_RESERVATION_ERROR";

export const addReservation = (newReservation) => ({
  type: ADD_RESERVATION,
  newReservation,
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_USER_SUCCESS = "SET_CURRENT_USER_SUCCESS";

export const setCurrentUserId = (currentUserId) => ({
  type: SET_CURRENT_USER,
  currentUserId,
});


export const GET_DISEASE_HISTORY_INFO = "GET_DISEASE_HISTORY_INFO ";
export const GET_DISEASE_HISTORY_INFO_SUCCESS = "GET_DISEASE_HISTORY_INFO_SUCCESS";

export const getDiseasetHistoryInfo = (id) => ({
  type: GET_DISEASE_HISTORY_INFO,
  id
});

export const ADD_NEW_DISEASE_HISTORY = "ADD_NEW_DISEASE_HISTORY";
export const ADD_NEW_DISEASE_HISTORY_SUCCESS = "ADD_NEW_DISEASE_HISTORY_SUCCESS";
export const ADD_NEW_DISEASE_HISTORY_ERROR = "ADD_NEW_DISEASE_HISTORY_ERROR";

export const addNewDiseaseHistory = (newDiseaseHistory) => ({
  type: ADD_NEW_DISEASE_HISTORY,
  newDiseaseHistory,
});

export const GET_CUSTOMER_REVIEW = "GET_CUSTOMER_REVIEW";
export const GET_CUSTOMER_REVIEW_SUCCESS = "GET_CUSTOMER_REVIEW_SUCCESS";
export const GET_CUSTOMER_REVIEW_ERROR = "GET_CUSTOMER_REVIEW_ERROR";

export const getCustomerReview = (customerReview) => ({
  type: GET_CUSTOMER_REVIEW,
  customerReview,
});
