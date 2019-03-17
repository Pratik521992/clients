import React from 'react';
import avatar from '../../../../assets/avatar.jpg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default () => {
  return (
    <div>
      <Navbar className="navbar-main" expand="md">
        <span className="fa fa-search form-control-feedback margin-left"></span>
        <input className="form-control col-lg-3 search-bar" type="text" placeholder="search transactions, invoices"/>
          <NavbarToggler />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem className="margin-right">
            <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret>
                  <span>Businesssolver systems</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              <NavItem className="icons"> 
                <i className="fa fa-cog"></i>
                <i className="fa fa-comments"></i>
                <i className="fa fa-bell"></i>
              </NavItem>
              
              <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span>UserName</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    profile
                  </DropdownItem>
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Security
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <img src={avatar} alt="Avatar" class="avatar"/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}