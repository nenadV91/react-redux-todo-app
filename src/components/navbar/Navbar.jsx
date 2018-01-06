import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, } from 'reactstrap';


import GuestLinks from './GuestLinks';
import UserLinks from './UserLinks';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: true};
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
  }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  renderLinks() {
    let {user} = this.props;
    
    if(user === null) return null;
    else if(user === false) return <GuestLinks />;
    else return <UserLinks user={user} />
  }


  render() {
    return (
      <Navbar expand="sm" color="dark" dark>
        <NavbarBrand tag={Link} to="/">ReactApp</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

        <Collapse isOpen={!this.state.collapsed} navbar>
          {this.renderLinks()}
        </Collapse>
      </Navbar>
    )
  }
}

export default connect(({user}) => {
  return {user}
})(NavBar);