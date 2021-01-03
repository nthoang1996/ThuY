import * as actions from "./action";
import * as data from "../../data.json";

const emptyUser = {
  name: "",
  id: "",
};

const currentUser = data.users.filter(
  (user) => user.id == data.currentUser.id
)[0];

const defaultReservation = data.newReservation.customerName
  ? data.newReservation
  : {
      customerName: currentUser ? currentUser.name : "",
      customerPhoneNumber: currentUser ? currentUser.phone : "",
      customerEmail: currentUser ? currentUser.email : "",
      customerMessage: "",
      branch: 0,
      reservationDate: "",
      reservationTime: "",
      service: 0,
      petType: 0,
      petSymptoms: "",
      isConfrimed: false,
      isFinished: false,
      userId: currentUser ? currentUser.id : "",
    };

const defaultValidation = {
  customerName: {
    isEmpty: false,
  },
  customerPhoneNumber: {
    isEmpty: false,
    isInvalid: false,
  },
  customerEmail: {
    isInvalid: false,
  },
  reservationDate: {
    isEmpty: false,
    isInvalid: false,
  },
  reservationTime: {
    isEmpty: false,
    isInvalid: false,
  },
};

const initialState = {
  newUser: emptyUser,
  currentUserId: data.currentUser.id,
  users: data.users,
  reservations: data.reservations,
  newReservation: defaultReservation,
  formValidation: defaultValidation,
  diseaseHistory: [],
  customerReview: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CURRENT_USER_INFO_SUCCESS:
      return { ...state, currentUser: action.currentUser };
    case actions.GET_NEW_RESERVATION_SUCCESS:
      return { ...state, newReservation: action.newReservation };
    case actions.UPDATE_NEW_RESERVATION_SUCCESS:
      return { ...state, newReservation: action.newReservation };
    case actions.ADD_NEW_RESERVATION_ERROR:
      return { ...state, formValidation: action.formValidation };
    case actions.SET_CURRENT_USER_SUCCESS:
      return { ...state, currentUserId: action.currentUserId };
    case actions.GET_DISEASE_HISTORY_INFO_SUCCESS:
      return {
        ...state,
        diseaseHistory: action.diseaseHistory,
      };
    case actions.ADD_NEW_DISEASE_HISTORY_SUCCESS:
      return { ...state, newReservation: action.newDiseaseHistory };
    case actions.GET_CUSTOMER_REVIEW_SUCCESS:
      console.log("action", action);
      return { ...state, customerReview: action.customerReview };
    default:
      return state;
  }
};

export default appReducer;
