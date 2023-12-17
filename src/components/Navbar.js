import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <h2>Ekart</h2>
        </Link>

        <div className="d-flex align-items-center">
          <ul className="navbar-nav mb-lg-0 mx-4 fs-5">
            <li className="nav-item">
              <button className="nav-button">Login</button>

              <Link
                className="text-black"
                to="/cart"
                style={{ marginLeft: "20px" }}
              >
                <button className="nav-button">
                  Cart <ShoppingCart className="cart-icon" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
