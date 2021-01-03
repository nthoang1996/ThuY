import React from "react";
import { useSelector } from "react-redux";
import { confirmedReservationByIdSelector } from "../selectors/selector";
import { ADDRESSES, SERVICES, PETS, DAYS, baseHost } from "../data_static";
import "./style.css";
import moment from "moment";

const ReservationItem = (props) => {
  const { info } = props;
  return (
    <div
      className="row container"
      style={{
        margin: "2rem auto",
        borderRadius: "1rem",
        border: "thin solid gray",
        /* width: "fit-content", */
        padding: "1rem",
        justifyContent: "space-around",
        width: "75%",
      }}
    >
      <div
        className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 info"
        style={{ marginBottom: ".5rem" }}
      >
        <div style={{ marginBottom: ".5rem", fontWeight: "bold" }}>
          Thông tin liên hệ
        </div>
        <div>Họ và tên: {info.customerName}</div>
        <div>Số điện thoại: {info.customerPhoneNumber}</div>
        {info.customerEmail && <div>Email: {info.customerEmail}</div>}
        {info.customerMessage && <div>Lời nhắn: {info.customerMessage}</div>}

        <div
          style={{
            marginBottom: ".5rem",
            marginTop: "1rem",
            fontWeight: "bold",
          }}
        >
          Thông tin lịch hẹn
        </div>
        <div>Cơ sở: {ADDRESSES[info.branch]}</div>
        <div>
          Thời gian hẹn: {DAYS[moment(info.reservationDate).format("ddd")]}
          {", "}
          {moment(info.reservationDate).format("DD/MM/YYYY")}
          {" - "}
          {info.reservationTime}
        </div>
        <div>Dịch vụ: {SERVICES[info.service]}</div>
        <div>Thú cưng: {PETS[info.petType]}</div>
        {info.petSymptoms && (
          <div>
            <div>Triệu chứng: {info.petSymptoms}</div>
          </div>
        )}
      </div>
      {info.isConfrimed ? (
        <div
          className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 confirm"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              color: "#009688",
              fontStyle: "italic",
              textAlign: "right",
            }}
            id="confirmText"
          >
            Đã xác nhận
          </div>
          <div
            style={{
              visibility: info.isConfrimed ? "hidden" : "",
              textAlign: "right",
              alignSelf: "flex-end",
            }}
          >
            <div className="btn button btn-fourth">HỦY</div>
          </div>
        </div>
      ) : (
        <div
          className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 confirm"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{ color: "red", fontStyle: "italic", textAlign: "right" }}
            id="confirmText"
          >
            Chờ xác nhận
          </div>
          <div
            style={{
              visibility: info.isConfrimed ? "hidden" : "",
              textAlign: "right",
              alignSelf: "flex-end",
            }}
          >
            <div className="btn button btn-fourth">HỦY</div>
          </div>
        </div>
      )}
    </div>
  );
};

const ConfirmedReservation = () => {
  const allReservation = useSelector(confirmedReservationByIdSelector);

  return (
    <div className="container">
      <div
        style={{ marginTop: "1rem", cursor: "pointer", fontSize: "0.75rem" }}
        onClick={() => window.location.replace(`${baseHost}/user`)}
      >
        Hồ sơ cá nhân /{" "}
        <span style={{ fontWeight: "bold", color: "#009688" }}>
          Lịch hẹn đã đặt
        </span>
      </div>
      <div className="section-title" style={{ marginTop: "2rem" }}>
        LỊCH HẸN CỦA BẠN
      </div>
      {allReservation.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "0" }}>
            Danh sách lịch hẹn của bạn hiện đang trống.
          </p>
          <p>Bạn có thể đặt lịch hẹn để xem được thông tin này.</p>
        </div>
      ) : (
        allReservation.reverse().map((item) => <ReservationItem info={item} />)
      )}
    </div>
  );
};

export default ConfirmedReservation;
