import React from 'react';
import {Link} from 'react-router-dom';
import {logout, toggleCompleted} from '../../actions';
import {connect} from 'react-redux';
import {
  Nav, UncontrolledDropdown, Input, Label,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


class UserLinks extends React.Component {
  render() {
    let {user} = this.props;

    return (
      <Nav navbar className="ml-auto">
        <UncontrolledDropdown nav>
          <DropdownToggle nav caret>{user.name}</DropdownToggle>

          <DropdownMenu className="dropdown-menu-right">
            <DropdownItem onClick={logout}>Logout</DropdownItem>

            <DropdownItem className="toggle" onClick={this.props.toggleCompleted} >
              <Input 
              type="checkbox" 
              readOnly 
              checked={this.props.showCompleted} />
              <span>Show completed</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    )
  }
}


export default connect(({showCompleted}) => {
  return {showCompleted}
}, {toggleCompleted})(UserLinks);