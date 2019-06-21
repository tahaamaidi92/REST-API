import React, { Component } from 'react';
import axios from 'axios'

class AllUsers extends Component {
  constructor(props){
super(props)
this.state=({
  users:[]
})
  }
  componentDidMount() {
    axios.get("http://localhost:4000/users")
    .then(res => this.setState({users: res.data}))


  }
  render() { 
    return ( 
    <div>
    {this.state.users.map(el=>{return(
      <div style={{background:'white',margin:'30px 40%',color:'gray'}}>
        <p>{el.name}</p>
        <p>{el.age}</p>
        <p>{el.job}</p>
        <p>{el.email}</p>
        <p>{el.password}</p>
    
    
      </div>
    )})}
    </div> 
    );
  }
}
 
export default AllUsers;