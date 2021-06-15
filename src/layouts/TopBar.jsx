import { Component } from "react";
import React, { useState } from "react";
import "../styles/TopBar.css";
import { Link } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";

export default function TopBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }
  let chancge = false;
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <img
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
            alt=""
          />
        </Link>
        <div className="nav-options">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/Cvs">
            Cvs
          </Link>
          <Link className="nav-link" to="/Job Postings">
            Job Postings
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          {
            <Menu.Item>
              <Button.Group position="right">
                <Button color="google plus" as={Link} to={"/login"}
                >
                  Sign In
                  
                </Button>
                <Button.Or />
                <Button color="olive" as={Link} to={"/register"}>
                  Sign Up
                </Button>
              </Button.Group>
            </Menu.Item>
          }

          {/* <div
              onClick={() => {
                this.props.onSetSidebarOpen(true);
              }}
              className="cart-icon-div"
            > */}
          {/* <img
                width="20px"
                className="cart-icon"
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
                alt=""
              /> */}
          {/* <span className="cart-count">{this.props.cartCount}</span> */}
        </div>
      </div>
    </div>
    // </div>
  );
}
