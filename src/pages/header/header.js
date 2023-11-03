import "./header.css";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    window.location.href = "/login";
  };

  return (
    <div className="header-container">
      <img src="./img/logo.png" alt="Logo da aplicação" />
      <div className="info">
        <span>tobias@gmail.com</span>
        <span className="exit" onClick={handleLogout}>
          sair
        </span>
      </div>
    </div>
  );
};

export default Header;
