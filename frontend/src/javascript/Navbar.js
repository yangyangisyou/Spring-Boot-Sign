import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";


class Navbar extends Component {
  render() {
    return (
      <div>
        <MDBNavbar color="black" dark expand="md">
          {/* 標首 */}
          <MDBNavbarBrand>
            <Link to="/">
              <strong className="white-text">系統測試</strong>
            </Link>
          </MDBNavbarBrand>


          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" navbar>
            
            <MDBNavbarNav left>
              {/* 分頁 */}
              <MDBNavItem>
                <MDBNavLink
                  to={{
                    pathname: "/checkin"
                  }}
                >
                  簽到
                </MDBNavLink>
              </MDBNavItem>

              {/* 分頁 - 活動紀錄 */}
              <MDBNavItem>
                <MDBNavLink
                  to={{
                    pathname: "/log"
                  }}
                >
                  紀錄
                </MDBNavLink>
              </MDBNavItem>

              {/* 分頁 - 商店 */}
              <MDBNavItem>
                <MDBNavLink
                  to={{
                    pathname: "/shop"
                  }}
                >
                  小鋪
                </MDBNavLink>
              </MDBNavItem>
              
              {/* 分頁 - 登入 */}
              <MDBNavItem>
                <MDBNavLink
                  to={{
                    pathname: "/signin"
                  }}
                >
                  登入
                </MDBNavLink>
              </MDBNavItem>

              {/* 分頁 - 註冊 */}
              <MDBNavItem>
                <MDBNavLink
                  to={{
                    pathname: "/signup"
                  }}
                >
                  註冊
                </MDBNavLink>
              </MDBNavItem>

              

            </MDBNavbarNav>

          </MDBCollapse>

        </MDBNavbar>
      </div>
    );
  }
}

export default Navbar;