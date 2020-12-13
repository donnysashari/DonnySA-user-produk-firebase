import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, deleteCookie } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['home', 'profile', 'contact', 'infoCorona'];

  const logoutClicked = () => {
    deleteCookie('userData');
    deleteCookie('token');
    window.location.replace('/');
  };

  const menuUserAuthenticated = () => {
    console.log(isUserAuthenticated());
    if (isUserAuthenticated()) {
      return (
        <>
          <Link to="/produk">
            <div className="menu">produk</div>
          </Link>
          <div
            className="menu"
            style={{ cursor: 'pointer', color: '#F4F4F4' }}
            onClick={() => {
              logoutClicked();
            }}
          >
            logout
          </div>
        </>
      );
    }
    return '';
  };
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {menuUserAuthenticated()}
    </div>
  );
};
export default Header;
