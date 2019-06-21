import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavLink extends Component {
  state = {}
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/Product"><p>Add Product</p></Link>
            <Link to="/user"><p>Add User</p></Link>
          </div>
          <div>
            <Link to="/Products"><p>All Products</p></Link>
            <Link to="/users"><p>All Users</p></Link>
          </div>




        </Router>

      </div>);
  }
}

export default NavLink;