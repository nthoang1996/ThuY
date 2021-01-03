import React from "react";
import * as data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { updateNewReservation, addNewReservation } from "../redux/App/action";
import { ADDRESSES, SERVICES, PETS, DAYS } from "../data_static";
import {
  formValidationSelector,
  newReservationSelector,
} from "../selectors/selector";
import "./style.css";
import { DatePicker, TimePicker } from "@atlaskit/datetime-picker";
import { availableTimes } from "../data_static";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

const alertStyle = { color: "orangered", fontSize: "0.8rem" };
const changeValueToIndexOfBranch = (value) => {
  return ADDRESSES.indexOf(value);
};

const ReservationForm = () => {
  const dispatch = useDispatch();
  const currentUser = data.currentUser;
  const newReservation = useSelector(newReservationSelector);
  const formValidation = useSelector(formValidationSelector);

  return (
    <div>
      {currentUser.id == 0 ? (
        <div className="notification-page">
          Vui lòng đăng nhập để thực hiện chức năng này.
        </div>
      ) : (
        <div
          className="section"
          style={{
            display: "block",
            border: "thin solid gray",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          <div className="section-title">ĐẶT LỊCH KHÁM BỆNH</div>
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

              <div className="form-section row">
                <div className="col-md-3 col-sm-12">
                  <div className="d-flex">
                    <div>Họ và tên</div>
                    <div style={alertStyle}>&nbsp;*</div>
                  </div>
                </div>
                <div className=" col-md-9 col-sm-12">
                  <input
                    className="form-control custom-form-control"
                    type="text"
                    placeholder="Tên của bạn..."
                    value={newReservation.customerName}
                    onChange={(e) =>
                      dispatch(
                        updateNewReservation({
                          ...newReservation,
                          customerName: e.target.value,
                        })
                      )
                    }
                  ></input>
                </div>
              </div>
              <div className="form-section row">
                <div className="col-md-3 col-sm-12"></div>
                {formValidation.customerName.isEmpty && (
                  <div className="col-md-9 col-sm-12" style={alertStyle}>
                    Vui lòng nhập họ tên của bạn
                  </div>
                )}
              </div>

              <div className="form-section row">
                <div className="col-md-3 col-sm-12">
                  <div className="d-flex">
                    <div>Số điện thoại</div>
                    <div style={alertStyle}>&nbsp;*</div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-12">
                  <input
                    className="form-control custom-form-control"
                    type="text"
                    placeholder="Số điện thoại của bạn..."
                    value={newReservation.customerPhoneNumber}
                    onChange={(e) =>
                      dispatch(
                        updateNewReservation({
                          ...newReservation,
                          customerPhoneNumber: e.target.value,
                        })
                      )
                    }
                  ></input>
                </div>
              </div>
              <div className="form-section row">
                <div className="col-md-3 col-sm-12"></div>
                {formValidation.customerPhoneNumber.isEmpty && (
                  <div className="col-md-9 col-sm-12" style={alertStyle}>
                    Vui lòng nhập số điện thoại của bạn
                  </div>
                )}
                {!formValidation.customerPhoneNumber.isEmpty &&
                  formValidation.customerPhoneNumber.isInvalid && (
                    <div className="col-md-9 col-sm-12" style={alertStyle}>
                      Vui lòng nhập số điện thoại hợp lệ
                    </div>
                  )}
              </div>

              <div className="form-section row">
                <div className="col-md-3 col-sm-12">Email</div>
                <div className="col-md-9 col-sm-12">
                  <input
                    className="form-control custom-form-control"
                    type="text"
                    placeholder="Địa chỉ email của bạn..."
                    value={newReservation.customerEmail}
                    onChange={(e) =>
                      dispatch(
                        updateNewReservation({
                          ...newReservation,
                          customerEmail: e.target.value,
                        })
                      )
                    }
                  ></input>
                </div>
              </div>
              <div className="form-section row">
                <div className="col-md-3 col-sm-12"></div>
                {formValidation.customerEmail.isInvalid && (
                  <div className="col-md-9 col-sm-12" style={alertStyle}>
                    Vui lòng nhập địa chỉ email hợp lệ
                  </div>
                )}
              </div>

              <div className="form-section row">
                <div
                  className="col-md-3 col-sm-12"
                  style={{ justifyContent: "start" }}
                >
                  Lời nhắn
                </div>
                <div className="col-md-9 col-sm-12">
                  <textarea
                    className="form-control custom-form-control"
                    placeholder="Lời nhắn của bạn..."
                    rows="3"
                    defaultValue={newReservation.customerMessage}
                    onChange={(e) =>
                      dispatch(
                        updateNewReservation({
                          ...newReservation,
                          customerMessage: e.target.value,
                        })
                      )
                    }
                  ></textarea>
                </div>
              </div>
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

              <div className="form-section row">
                <div className="col-md-3 col-sm-12">
                  <div className="d-flex">
                    <div>Cơ sở</div>
                    <div style={alertStyle}>&nbsp;*</div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-12">
                  {/* <div>
                <DropdownMenu
                  trigger="Chọn cơ sở"
                  shouldFitContainer
                  triggerType="button"
                >
                  <DropdownItemGroup>
                    {ADDRESSES.map((item, index) => (
                      <DropdownItem
                        value={ADDRESSES[newReservation.branch - 1]}
                        key={index}
                        onClick={() => console.log("will never fire")}
                        // onClick={() =>
                        //   dispatch(
                        //     updateNewReservation({
                        //       ...newReservation,
                        //       branch: index + 1,
                        //     })
                        //   )
                        // }
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownItemGroup>
                </DropdownMenu>
              </div>{" "} */}
                  <select
                    className="custom-form-control dropdown"
                    style={{ padding: "0.375rem 0.5rem" }}
                    defaultValue={ADDRESSES[newReservation.branch]}
                    onChange={(e) =>
                      dispatch(
                        updateNewReservation({
                          ...newReservation,
                          branch: changeValueToIndexOfBranch(e.target.value),
                        })
                      )
                    }
                  >
                    {ADDRESSES.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-section row">
                <div className="col-md-3 col-sm-12">
                  <div className="d-flex">
                    <div>Thời gian hẹn</div>
                    <div style={alertStyle}>&nbsp;*</div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="form-group row">
                    <div className="col-md-6 col-sm-6">
                      {/* <input
                    className="custom-form-control"
                    type="date"
                    min={today}
                    defaultValue={newReservation.reservationDate}
                    onChange={(e) =>
                      dispatch(
                        updateNewReservation({
                          ...newReservation,
                          reservationDate: e.target.value,
                        })
                      )
                    }
                  /> */}
                      <DatePicker
                        placeholder="Chọn ngày"
                        value={newReservation.reservationDate}
                        onChange={(value) =>
                          dispatch(
                            updateNewReservation({
                              ...newReservation,
                              reservationDate: value,
                            })
                          )
                        }
                      />
                      {formValidation.reservationDate.isEmpty ? (
                        <div style={alertStyle}>Vui lòng chọn ngày</div>
                      ) : formValidation.reservationDate.isInvalid ? (
                        <div style={alertStyle}>
                          Vui lòng chọn một ngày khác
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="col-md-6 col-sm-6">
                      {/* <input className="custom-form-control" type="time" /> */}
                      <TimePicker
                        timeIsEditable="false"
                        placeholder="Chọn khung giờ"
                        times={availableTimes}
                        value={newReservation.reservationTime}
                        onChange={(value) =>
                          dispatch(
                            updateNewReservation({
                              ...newReservation,
                              reservationTime: value,
                            })
                          )
                        }
                      />
                      {formValidation.reservationTime.isEmpty ? (
                        <div style={alertStyle}>Vui lòng chọn khung giờ</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="form-section row">
                <div className="col-md-3 col-sm-12"></div>
                <div className="d-flex col-md-9 col-sm-12">
                  <div className="col-md-6 col-sm-6" style={alertStyle}>
                    {formValidation.reservationDate.isEmpty
                      ? "Vui lòng chọn ngày"
                      : formValidation.reservationDate.isInvalid
                      ? "Vui lòng chọn một ngày khác"
                      : ""}
                  </div>
                  <div className="col-md-6 col-sm-6" style={alertStyle}>
                    {formValidation.reservationTime.isEmpty
                      ? "Vui lòng chọn khung giờ"
                      : ""}
                  </div>
                </div> */}

              <div className="form-section row">
                <div
                  className="col-md-3 col-sm-12"
                  style={{ justifyContent: "flex-start" }}
                >
                  <div className="d-flex">
                    <div>Dịch vụ</div>
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      &nbsp;*
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex col-md-9 col-sm-12 row"
                  style={{ padding: "0 1.5rem" }}
                >
                  {SERVICES.map((item, index) => (
                    <label
                      key={index}
                      className="radio-container col-12"
                      style={{ marginRight: "1rem" }}
                    >
                      <input
                        className="d-flex justify-center"
                        style={{ marginRight: "0.25rem" }}
                        type="radio"
                        checked={newReservation.service == index ? true : false}
                        onChange={() =>
                          dispatch(
                            updateNewReservation({
                              ...newReservation,
                              service: index,
                            })
                          )
                        }
                      />
                      <span className="radio-btn"></span>
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section row">
                <div className="col-md-3 col-sm-12">
                  <div className="d-flex">
                    <div>Thú cưng</div>
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      &nbsp;*
                    </div>
                  </div>
                </div>

                <div className="d-flex col-md-9 col-sm-12">
                  {PETS.map((item, index) => (
                    <label
                      className="radio-container"
                      style={{ marginRight: "1rem" }}
                      key={index}
                    >
                      <input
                        style={{ marginRight: "0.25rem" }}
                        type="radio"
                        checked={newReservation.petType == index ? true : false}
                        onChange={() =>
                          dispatch(
                            updateNewReservation({
                              ...newReservation,
                              petType: index,
                            })
                          )
                        }
                      />
                      <span className="radio-btn"></span>
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section row">
                <div
                  className="col-md-3 col-sm-12"
                  style={{ justifyContent: "start" }}
                >
                  Triệu chứng
                </div>
                <div className="col-md-9 col-sm-12">
                  <textarea
                    className="form-control custom-form-control"
                    placeholder="Mô tả triệu chứng của thú cưng (nếu có)..."
                    rows="3"
                    defaultValue={newReservation.petSymptoms}
                    onChange={(e) =>
                      dispatch(
                        updateNewReservation({
                          ...newReservation,
                          petSymptoms: e.target.value,
                        })
                      )
                    }
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex"
            style={{
              justifyContent: "flex-end",
              margin: "1.5rem 10% 0 0",
            }}
          >
            <div
              className="button"
              onClick={() => dispatch(addNewReservation(newReservation))}
            >
              ĐẶT LỊCH
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
