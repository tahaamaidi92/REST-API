import React, { Component } from 'react';
import axios from 'axios'

class AllProducts extends Component {
  constructor(props){
    super(props)
    this.state=({
      products:[]
    })
      }
      componentDidMount() {
        axios.get("http://localhost:4000/product")
        .then(res => this.setState({products: res.data}));
    
      }
  render() { 
    return ( 
    <div>
{this.state.products.map(el=>{return(
  <div style={{background:'white',margin:'30px 40%',color:'gray'}}>
    <p>{el.name}</p>
    <p>{el.price}</p>
    <img src={el.img} width='100%'/>
    <p>{el.rating}</p>
    <p>{el.qtn}</p>


  </div>
)})}
    </div> 
    );
  }
}

 
export default AllProducts;