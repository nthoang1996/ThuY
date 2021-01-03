import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelopeOpenText,
  fapencilAlt
} from "@fortawesome/free-solid-svg-icons";
import { SHORT_ADDRESSES } from "../data_static";

const Footer = () => {
  const styleSendButton = {
    fontSize: "0.7rem",
    textDecoration: "none",
    position: "absolute",
    right: "0.5%",
    top: "5%",
    padding: "0.25rem 1rem",
    borderRadius: "20px",
  };
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#54B2A9",
        padding: "2rem 3rem",
        color: "white",
        fontSize: "0.8rem",
      }}
      id="footer"
    >
      <div
        className="container container-sm container-md container-lg container-xl container-xxl row"
        style={{ margin: "auto", padding: "0", justifyContent: "center" }}
      >
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl"
          style={{ textAlign: "center" }}
        >
          <img
            id="logo"
            src="https://img.icons8.com/pastel-glyph/64/ffffff/dog-footprint.png"
          />
          <h4 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            PHÒNG KHÁM THÚ Y PETCARE
          </h4>
        </div>
        <div
          className="col-12 col-sm-12 col-md col-lg col-xl col-xxl"
          id="itemFooter"
          style={{ lineHeight: "1.5" }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontWeight: "bold" }}>THỜI GIAN LÀM VIỆC</div>
            <p>08:00 - 20:00</p>
            <p>Tất cả các ngày trong tuần</p>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontWeight: "bold" }}>LIÊN HỆ</div>
            <p>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ marginRight: ".5rem" }}
              ></FontAwesomeIcon>
              0123456789
            </p>
            <p>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                style={{ marginRight: ".5rem" }}
              ></FontAwesomeIcon>
              admin@petcare.com
            </p>
            <p>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ marginRight: ".5rem" }}
              ></FontAwesomeIcon>
              PetcareClinic
            </p>
          </div>

          <div>
            <div style={{ fontWeight: "bold" }}>ĐĂNG KÝ NHẬN THÔNG TIN</div>
            <div style={{ position: "relative" }}>
              <input
                className="form-control custom-form-control"
                type="email"
                placeholder="Email của bạn"
                aria-label="Search"
                style={{ borderRadius: "20px", height: "1.75rem" }}
              />
              <a className="button" style={styleSendButton}>
                GỬI
              </a>
            </div>
          </div>

          <div style={{ fontSize: "0.6rem", marginTop: "1rem" }}>
            Copyright © 2020 | Nhóm 02 - Lớp Thiết kế giao diện 17_31 - FIT -
            HCMUS
          </div>
        </div>
        <div
          className="col-12 col-sm-12 col-md col-lg col-xl col-xxl"
          id="itemFooter"
          style={{ lineHeight: "1.5" }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontWeight: "bold" }}>ĐỊA CHỈ</div>
            {SHORT_ADDRESSES.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.702047763437!2d106.6763073140681!3d10.757430692334424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f02cd8a40c7%3A0x7484754910aa44f1!2zMTU3IMSQLiBOZ3V54buFbiBUcsOjaSwgUGjGsOG7nW5nIDMsIFF14bqtbiA1LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1608885205071!5m2!1svi!2s"
              width="100%"
              height="auto"
              style={{ borderRadius: "0.5rem" }}
              allowFullscreen=""
              ariaHidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
