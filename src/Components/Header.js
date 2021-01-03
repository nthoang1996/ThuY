import React from "react";
import { currentUserSelector, allUsers } from "../selectors/selector";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { setCurrentUserId } from '../redux/App/action';
import { baseHost } from '../../src/data_static';

const Navbar = [
  "TRANG CHỦ",
  "GIỚI THIỆU",
  "DỊCH VỤ",
  "ĐÁNH GIÁ",
  "LIÊN HỆ",
  "ĐẶT LỊCH",
];
const linkToPage = [
  "/",
  "/introduction",
  "/services",
  "/reviews",
  "/contact",
  "/booking",
  "/history"
];
const Dropdown = [
  "Hồ sơ cá nhân",
  "Đổi mật khẩu",
  "Lịch hẹn đã đặt",
  "Lịch sử khám",
  "Thuốc đã mua",
  "Đăng xuất",
];

const pathName = window.location.pathname;

const DropdownMenu = (props) => {
  const { currentUserName } = props;
  const dispatch = useDispatch();
  const chooseOption = (index) => {
    if (index === 5){
        dispatch(setCurrentUserId(''));
    }
    if (index === 2) {
      window.location.replace(`${baseHost}/user/bookingList`);
    }
    if (index === 3) {
      window.location.replace(`${baseHost}/history/medical
      `);
    }
  }
  return (
    <div className="dropdown">
      <a
        className="dropdown-toggle"
        id="user"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{ marginRight: ".5rem" }}
        ></FontAwesomeIcon>
        {currentUserName}
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{minWidth: '9rem'}}>
        {Dropdown.map((item, index) => (
          <li key={index}>
            <div className="dropdown-item" style={{ fontSize: "1rem" }} onClick={() => chooseOption(index)}>
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const all = useSelector(allUsers);

  const register = () => {
    const user = all[Math.floor(Math.random() * all.length)]
    dispatch(setCurrentUserId(user.id));
  }
  const initNavbar = (nav) => {
    let arrNav = [];
    nav.forEach((element, index) => {
      const item = (
        <li
          key={index}
          className="nav-item"
          style={{ marginRight: "10px", fontWeight: 600, width: "fit-content" }}
        >
          <a
            className="nav-link"
            href={linkToPage[index]}
            style={{color: 'white'}}
          >
            {element}
            {pathName === linkToPage[index] ? (
            <span
              className="navigator-slider"
              style={{ margin: ".1rem 20%" }}
            ></span>
          ) : (
            <span
              className="navigator-slider"
              style={{ margin: ".1rem 20%", visibility: "hidden" }}
              id="itemNav"
            ></span>
          )}
            
          </a>
          
        </li>
      );
      arrNav.push(item);
    });
    return arrNav;
  };

  const MyNavbar = initNavbar(Navbar);

  return (
    <div
      id="header"
      className="row container-fluid"
      style={{
        backgroundColor: "#54B2A9",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "2",
        padding: "0 3rem",
      }}
    >
      <nav className="col-3 col-sm-3 col-md col-lg-8 col-xl-8 col-xxl-8 navbar navbar-expand-lg navbar-light"
        style={{ paddingLeft: "0" }}
      >
        <a
          className="col-1 justify-center"
          href={linkToPage[0]}
          style={{
            flexDirection: "column",
            color: "white",
            fontSize: "0.75vw",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          id="logoFrame"
        >
          <div
            className="d-flex justify-center"
            style={{ marginBottom: "0.25rem" }}
          >
            <img src="https://img.icons8.com/pastel-glyph/64/ffffff/dog-footprint.png" id="logo"></img>
          </div>
          <div className="d-flex justify-center">PETCARE</div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "white", color: "white" }}
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ margin: "auto"}}
          >
            {MyNavbar}
          </ul>
        </div>
      </nav>
      <div
        className="col col-sm col-md col-lg-2 col-xl-2 col-xxl-2"
        id="searchCol"
      >
        <div id="searchForm">
          <input
            className="custom-form-control me-2"          
            ype="search"
            placeholder="Tìm kiếm"
            aria-label="Search"
            style={{ borderRadius: "20px", fontSize: ".5rem", lineHeight: "1", paddingLeft: '1.8rem' }}
          />
          <FontAwesomeIcon icon={faSearch} style={{position: 'absolute', top: '.25rem', left: '.5rem', color: '#8080809e'}}></FontAwesomeIcon>
        </div>       
      </div>

      <div
        className="col col-sm col-md col-lg-2 col-xl-2 col-xxl-2"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0",
          alignItems: 'center'
        }}
        id='userTag'
      >
        {currentUser ? (
          <DropdownMenu currentUserName={currentUser.name} />
        ) : (
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                width: "fit-content",
              }}
              id="register"
            >
              <a style={{ fontSize: ".7rem" }} onClick={register}>Đăng ký</a>

              <div style={{ color: "white", margin: "0 .5rem" }}>/</div>

              <a style={{ fontSize: ".7rem" }} onClick={register}>Đăng nhập</a>
            </div>
          )}
      </div>
    </div>
  );
};

export default Header;
