import React, { Component } from 'react';
import Route1 from './Route.js'
import Product from './Product.js'
import './App.css'
import Users from './users.js'
import ModifUser from './modifusers.js'
import AllUsers from './API/AllUsers.js'
import AllProducts from './API/AllProducts.js'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class App extends Component {
  render() { 
    return (
   <div> <Router>
     <div className='appp'>
     <div className='meme'>
            
            <Link to="/Product"><p>Add Product</p></Link>
            <Link to="/user"><p>Add User</p></Link>
            <Link to="/modifuser"><p>Modify User</p></Link>
          </div>
          <div  className='meme'>
            <Link to="/Products"><p>All Products</p></Link>
            <Link to="/users"><p>All Users</p></Link>
          </div>
     </div>
           
      <Route path="/user" component={Users}/>
      <Route path="/Product" component={Product}/>
      <Route path="/modifuser" component={ModifUser} />
      <Route path="/users" component={AllUsers}/>
      <Route path="/Products" component={AllProducts}/>
          </Router>
   </div>
     );
  }
}
 
export default App;