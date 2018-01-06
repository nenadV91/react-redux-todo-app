import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, NavLink} from 'reactstrap';

const GuestLinks = (props) => {
  return (
    <Nav navbar className="ml-auto">
      <NavItem>
        <NavLink tag={Link} to="/login">Login</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/register">Register</NavLink>
      </NavItem>
    </Nav>
  )
}

export default GuestLinks;