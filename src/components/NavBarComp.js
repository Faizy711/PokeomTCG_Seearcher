import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

class NavBarComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Navbar</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2">Dropdown</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown> 
                    </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBFormInline waves>
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                        </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar >
        );
    }
}


export default NavBarComp;