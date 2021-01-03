import React from "react";
import "./style.css";
import { baseHost } from "../data_static";

const ReservationSuccessPage = () => {
  return (
    <div
      className="notification-page"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="d-flex justify-center">
        <div
          className="col-lg-6 col-md-8 col-sm-12"
          style={{ textAlign: "center" }}
        >
          Cảm ơn bạn đã tin tưởng lựa chọn dịch vụ của phòng khám!<br></br>{" "}
          Chúng tôi sẽ liên hệ qua số điện thoại để xác nhận lịch hẹn của bạn
          trong thời gian sớm nhất.
        </div>
      </div>
      <div className="d-flex justify-center" style={{ marginTop: "1rem" }}>
        <div
          className="button"
          onClick={() =>
            window.location.replace(`${baseHost}/user/bookingList`)
          }
          style={{ marginRight: "1rem" }}
        >
          XEM DANH SÁCH LỊCH HẸN ĐÃ ĐẶT
        </div>
      </div>
    </div>
  );
};

export default ReservationSuccessPage;
