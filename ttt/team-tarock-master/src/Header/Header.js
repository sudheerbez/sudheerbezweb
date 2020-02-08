import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.jpeg';

export const HeaderTemplate = ({ menuItems }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="31"
        height="31"
        className="d-inline-block align-top"
        alt="TTT-logo"
      />
    </Navbar.Brand>
    <Nav className="ml-auto" pullRight style={{float : 'right'}}>
      {menuItems && menuItems.map(menuItem => (
        <Nav.Link href={menuItem.linkUrl} key={menuItem.linkUrl}>{menuItem.label}</Nav.Link>
      ))}
    </Nav>
  </Navbar>
);

const Header = ({headerData}) => {
  if (!headerData || !headerData.menuItems) {
    return null;
  }
  return <HeaderTemplate menuItems={headerData.menuItems} />;
};

export default Header;

