import React from "react";
import "./style.css";
import { ADDRESSES, SERVICES, PETS, DAYS, baseHost } from "../data_static";
import { addReservation } from "../redux/App/action";
import { useDispatch } from "react-redux";
import * as data from "../data.json";
import moment from "moment";

const ReservationConfirmPage = () => {
  const dispatch = useDispatch();
  const newReservation = data.newReservation;
  return (
    <div className="d-flex justify-center">
      {!newReservation.customerName ? (
        <div className="notification-page">
          Bạn cần đặt một lịch hẹn trước khi xem trang này.
        </div>
      ) : (
        <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
          <div
            className="section"
            style={{
              display: "block",
              border: "thin solid gray",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <div className="section-title">XÁC NHẬN LỊCH HẸN</div>
            <div className="row" style={{ padding: "0 10%" }}>
              <div>
                <div
                  style={{
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Thông tin khách hàng
                </div>

                <div className="form-section">
                  <div>Họ và tên: {newReservation.customerName}</div>
                </div>
                <div className="form-section">
                  <div>Số điện thoại: {newReservation.customerPhoneNumber}</div>
                </div>
                {newReservation.customerEmail && (
                  <div className="form-section">
                    <div>Email: {newReservation.customerEmail}</div>
                  </div>
                )}
                {newReservation.customerMessage && (
                  <div className="form-section">
                    <div>Lời nhắn: {newReservation.customerMessage}</div>
                  </div>
                )}
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <div
                  style={{
                    marginBottom: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Thông tin lịch hẹn
                </div>
                <div className="form-section">
                  <div>Cơ sở: {ADDRESSES[newReservation.branch]}</div>
                </div>

                <div className="form-section">
                  <div>
                    Thời gian hẹn:{" "}
                    {DAYS[moment(newReservation.reservationDate).format("ddd")]}
                    {", "}
                    {moment(newReservation.reservationDate).format(
                      "DD/MM/YYYY"
                    )}
                    {" - "}
                    {newReservation.reservationTime}
                  </div>
                </div>
                <div className="form-section">
                  <div>Dịch vụ: {SERVICES[newReservation.service]}</div>
                </div>
                <div className="form-section">
                  <div>Thú cưng: {PETS[newReservation.petType]}</div>
                </div>
                {newReservation.petSymptoms && (
                  <div className="form-section">
                    <div>Triệu chứng: {newReservation.petSymptoms}</div>
                  </div>
                )}
              </div>
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: "center",
                margin: "1.5rem 0",
              }}
            >
              <div
                className="btn-third"
                style={{ marginRight: "1rem" }}
                onClick={() => window.location.replace(`${baseHost}/booking`)}
              >
                CHỈNH SỬA THÔNG TIN
              </div>
              <div
                className="button"
                onClick={() => dispatch(addReservation(newReservation))}
                style={{margin: 'auto 0'}}
              >
                XÁC NHẬN
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationConfirmPage;
