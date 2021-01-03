import React from "react";
import "./style.css";
import { baseHost } from "../data_static";
import CustomerReview from '../Components/CustomerReview'

const MainPage = () => {
  return (
    <div>
      <div id="banner">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <div
                  style={{
                    position: "absolute",
                    left: "15%",
                    color: "#009688",
                    display: "block",
                  }}
                >
                  <div>
                    <strong>Phòng khám thú y Pet Care</strong>
                    <br></br>
                    Mở cửa từ 08:00 - 21:00 tất cả các ngày
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <a
                      className="button"
                      style={{
                        fontSize: "0.8rem",
                        textDecoration: "none",
                      }}
                      href={`${baseHost}/booking`}
                    >
                      ĐẶT LỊCH NGAY
                    </a>
                  </div>
                </div>
                <img
                  className="d-block w-100"
                  src="banner1.jpg"
                  alt="First slide"
                ></img>
              </div>
            </div>
            <div className="carousel-item">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5%",
                    color: "#009688",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ fontSize: "0.8rem", color: "#6f3a23" }}>
                      Chăm sóc sức khỏe thú cưng của bạn<br></br> với đội ngũ
                      bác sĩ chuyên nghiệp, tận tình
                    </div>
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    <a
                      className="button btn-secondary"
                      style={{
                        fontSize: "0.8rem",
                        textDecoration: "none",
                      }}
                      href={`${baseHost}/booking`}
                    >
                      ĐẶT LỊCH NGAY
                    </a>
                  </div>
                </div>

                <img
                  className="d-block w-100"
                  src="banner2.jpg"
                  alt="Second slide"
                ></img>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>

      <div className="section">
        <div style={{ padding: ".5rem", textAlign: "center" }}>
          <h2 className="section-title">VỀ CHÚNG TÔI</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            lorem ut nibh laoreet vestibulum at eget velit. Morbi elementum
            dictum magna id elementum. Suspendisse fringilla lacus et est
            laoreet laoreet. Proin tincidunt ullamcorper nisi, ut pellentesque
            magna vulputate feugiat. Nam convallis dui a diam molestie, ac
            maximus mauris mattis. Quisque eu justo tristique, varius risus ut,
            interdum quam. Nullam tincidunt, eros vitae convallis posuere, lacus
            lacus finibus turpis, in sagittis ligula dui vel diam.
          </div>
        </div>
      </div>

      <div className="section">
        <div style={{ padding: ".5rem", textAlign: "center" }}>
          <h2 className="section-title">DỊCH VỤ</h2>
          <div style={{ marginBottom: "2rem" }}>
            Phòng khám cung cấp những dịch vụ đa dạng, <br></br>
            đáp ứng mọi nhu cầu chăm sóc sức khỏe thú cưng của bạn
            <br></br>
            <a
              href="/booking"
              style={{ color: "#212529", marginRight: "2rem" }}
            >
              Đặt lịch ngay
            </a>
            <a href="/services" style={{ color: "#212529" }}>
              Xem tất cả dịch vụ
            </a>
          </div>

          <div className="row">
            <div
              className="col-7 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
              style={{ margin: "1rem auto" }}
            >
              <div style={{ overflow: "hidden", marginBottom: ".5rem" }}>
                <img
                  className="service-img"
                  src="service1.jpg"
                  width="100%"
                ></img>
              </div>

              <a className="service-name">Khám sức khỏe tổng quát</a>
            </div>
            <div
              className="col-7 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
              style={{ margin: "1rem auto" }}
            >
              <div style={{ overflow: "hidden", marginBottom: ".5rem" }}>
                <img
                  className="service-img"
                  src="service2.jpg"
                  width="100%"
                ></img>
              </div>
              <a className="service-name">Cấp cứu</a>
            </div>
            <div
              className="col-7 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
              style={{ margin: "1rem auto" }}
            >
              <div style={{ overflow: "hidden", marginBottom: ".5rem" }}>
                <img
                  className="service-img"
                  src="service3.jpg"
                  width="100%"
                ></img>
              </div>
              <a className="service-name">Tiêm phòng</a>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <CustomerReview />
      </div>
    </div>
  );
};

export default MainPage;
