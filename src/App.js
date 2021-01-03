import React from "react";
import "regenerator-runtime/runtime";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, $CombinedState } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import { JssProvider, SheetsRegistry, createGenerateId } from "react-jss";
import rootReducer from "./redux/rootReducer";
import { rootSaga } from "./redux/rootSaga";
import Header from "../src/Components/Header";
import MainPage from "../src/Components/MainPage";
import Footer from "../src/Components/Footer";
import ReservationForm from "./Components/ReservationForm";
import HistoryForm from "./Components/HistoryForm";
import ReservationConfirmPage from "./Components/ReservationConfirmPage";
import ReservationSuccessPage from "./Components/ReservationSuccessPage";
import ConfirmedReservation from "./Components/ConfirmedReservation";
import AllCustomerReview from "./Components/AllCustomerReview";

const devMode = process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();
let store = null;
if (devMode) {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
} else {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(rootSaga);

const App = () => {
  const sheets = new SheetsRegistry();
  const generateId = createGenerateId();
  const pathName = window.location.pathname;

  return (
    <Provider store={store}>
      <JssProvider registry={sheets} generateId={generateId}>
        <div>
          <Header />
          {pathName == "/" ? (
            <MainPage />
          ) : pathName == "/booking" ? (
            <ReservationForm />
          ) : pathName == "/booking/confirm" ? (
            <ReservationConfirmPage />
          ) : pathName == "/booking/success" ? (
            <ReservationSuccessPage />
          ) : pathName == "/user/bookingList" ? (
            <ConfirmedReservation />
          ) : pathName == "/customerReview" ? (
            <AllCustomerReview />
          ) : (
            <HistoryForm/>
            // <div className="notification-page">Đang cập nhật...</div>
            // <div className="notification-page"><HistoryForm/></div>
          )}
          <Footer />
        </div>
      </JssProvider>
    </Provider>
  );
};

export default App;
