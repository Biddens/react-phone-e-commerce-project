import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar sticky-top navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src="https://onlineteledirectory.com/wp-content/uploads/2019/04/logo9.jpg" alt="store" className="navbar-brand"/>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
             <Link to="/" className="nav-link">
              <h2 className="company">LWEZA CLAYS LTD</h2>
             </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBrown);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;


