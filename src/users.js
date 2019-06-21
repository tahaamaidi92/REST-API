import React, { Component } from 'react';
import axios from 'axios'
class Users extends Component {
  constructor(props){
    super(props)
    this.state=({
      name:'',
      age:'',
      job:'',
      email:'',
      password:''
    })
  }
  userName=e=>{
    this.setState({
      name:e.target.value
    })
  }
  userAge=e=>{
    this.setState({
      age:e.target.value+'  years old'
    })
  }
  userJob=e=>{
    this.setState({
      job:e.target.value
    })
  }
  userEmail=e=>{
    this.setState({
      email:e.target.value
    })
  }
  userPassword=e=>{
    this.setState({
      password:e.target.value
    })
  }
  addUser = () => {
    axios.post("http://localhost:4000/users", {
      
      name: this.state.name,
      age:this.state.age,
      job:this.state.job,
      email:this.state.email,
      password:this.state.password
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
          ADD USER
        </h1>
        <br/>
        <br/>
        <span class="subtitle">NAME:</span>
        <br/>
        <input type="text" id="userName" onChange={this.userName}/>
        <br/>
        <span class="subtitle">AGE:</span>
        <br/>
        <input type="text" id="userage" onChange={this.userAge}/>
        <br/>
        <br/>
        <span class="subtitle">EMAIL:</span>
        <br/>
        <input type="email" id="useremail" onChange={this.userEmail}/>
        <br/>
        <br/>
        <span class="subtitle">JOB:</span>
        <br/>
        <input  type="text" id="userjob" onChange={this.userJob}/>
        <br/>
        <br/>
        <span class="subtitle">PASSWORD:</span>
        <br/>
        <input  type="password" id="userpassword" onChange={this.userPassword}/>
        <br/>
        <br/>
      <span onClick={this.addUser} className='submit-btn' style={{padding:'10px 30px'}}>Submit</span>
      
      </form>
    </div>
  </div>
</div>

</div>
     );
  }
}
 
export default Users;