import React from 'react';
import {Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';

export default class Header extends React.Component {

    state = {
      collapsed: true
    }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">UWRITE</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        </Navbar>
      </div>
    );
  }
}