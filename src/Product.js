import React, { Component } from 'react';
import './product.css'
import axios from 'axios'
class Product extends Component {
  constructor(props){
    super(props)
    this.state=({
      name:'',
      price:'',
      img:'',
      rating:0,
      qtn:''
    })
  }
  ProductName=e=>{
    this.setState({
      name:e.target.value
    })
  }
  ProductPrice=e=>{
    this.setState({
      price:e.target.value+' $'
    })
  }
  ProductRating=e=>{
    this.setState({
      rating:e.target.value
    })
  }
  ProductImg=e=>{
    this.setState({
      img:e.target.value
    })
  }
  ProductQtn=e=>{
    this.setState({
      qtn:e.target.value
    })
  }
  addProduct = () => {
    axios.post("http://localhost:4000/product", {

      name: this.state.name,
      price: this.state.price,
      img: this.state.img,
      rating: this.state.rating,
      qtn: this.state.qtn
    })
    .then(res=> console.log(res))
    .catch(err => console.log(err))
  }

  render() { 
    return ( 
<div>
<div class="flex-container">
  <div class="content-container">
    <div class="form-container">
      <form action="">
        <h1>
          ADD PRODUCT
        </h1>
        <br/>
        <br/>
        <span class="subtitle">NAME:</span>
        <br/>
        <input  type="text" id="ProductName" onChange={this.ProductName}/>
        <br/>
        <span class="subtitle">PRICE:</span>
        <br/>
        <input type="text" id="ProductPrice" onChange={this.ProductPrice}/>
        <br/>
        <br/>
        <span class="subtitle">RATING:</span>
        <br/>
        <input type="text" id="ProductRating" onChange={this.ProductRating}/>
        <br/>
        <br/>
        <span class="subtitle">IMAGE (URL):</span>
        <br/>
        <input  type="text" id="ProductImg" onChange={this.ProductImg}/>
        <br/>
        <br/>
        <span class="subtitle">QTN:</span>
        <br/>
        <input type="text" id="ProductQtn" onChange={this.ProductQtn}/>
        <br/>
        <br/>
      <span onClick={this.addProduct} className='submit-btn' style={{padding:'10px 30px'}}>Submit</span>
      </form>
    </div>
  </div>
</div>

</div>

     );
  }
}
 
export default Product;