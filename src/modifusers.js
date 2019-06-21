import React, { Component } from 'react';
import axios from 'axios'
class ModifUser extends Component {
    constructor(props){
    super(props)
    this.state = ({
    contact:'',
    id:'', 
    name:'',
    age:'',
    job:'',
    email:'',
    password:'' })
}
componentWillMount(){
    axios.get("http://localhost:4000/users")
    .then(res=>this.setState({contact:res.data}))
}
userID1=(e)=>{
    this.setState({
    id:e.target.value
    })
}
userName1=e=>{
    this.setState({
        name:e.target.value
    })
}
userAge1=e=>{
    this.setState({
        age:e.target.value
    })
}
userEmail1=e=>{
    this.setState({
        email:e.target.value
    })
}
userJob1=e=>{
    this.setState({
        job:e.target.value
    })
}
userPassword1=e=>{
    this.setState({
        password:e.target.value 
    })
}
modifuserUser=()=>{
    axios.put(`http://localhost:4000/users/${this.state.id}`, {
      
        name: this.state.name,
        age:this.state.age,
        job:this.state.job,
        email:this.state.email,
        password:this.state.password
      })
      .then(res=> console.log(res))
      .catch(err => console.log(err))
}
getuserUser=()=>{
let x =this.state.contact.filter(el=>el._id===this.state.id)
this.setState({
    name: x[0].name,
    age:x[0].age,
    job:x[0].job,
    email:x[0].email,
    password:x[0].password
})
}
deleteuserUser=()=>{
axios.delete(`http://localhost:4000/users/${this.state.id}`,{
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
          MODIFY USER
        </h1>
        <br/>
        <br/>
        <span class="subtitle">ID:</span>
        <br/>
        <input value={this.state.id} type="text" id="userName" onChange={this.userID1}/>
        <br/>
        <br/>
        <span class="subtitle">NAME:</span>
        <br/>
        <input value={this.state.name}  type="text" id="userName" onChange={this.userName1}/>
        <br/>
        <span class="subtitle">AGE:</span>
        <br/>
        <input value={this.state.age}  type="text" id="userage" onChange={this.userAge1}/>
        <br/>
        <br/>
        <span class="subtitle">EMAIL:</span>
        <br/>
        <input value={this.state.email}  type="email" id="useremail" onChange={this.userEmail1}/>
        <br/>
        <br/>
        <span class="subtitle">JOB:</span>
        <br/>
        <input value={this.state.job}  type="text" id="userjob" onChange={this.userJob1}/>
        <br/>
        <br/>
        <span class="subtitle">PASSWORD:</span>
        <br/>
        <input  value={this.state.password}  type="password" id="userpassword" onChange={this.userPassword1}/>
        <br/>
        <br/>
      <span onClick={this.modifuserUser} className='submit-btn' style={{padding:'10px 30px'}}>Modify</span>
      <span onClick={this.getuserUser} className='submit-btn' style={{padding:'10px 30px'}}>GET Data</span>
      <span onClick={this.deleteuserUser} className='submit-btn' style={{padding:'10px 30px'}}>Delete</span>
      </form>
    </div>
  </div>
</div>

</div>
         );
    }
}
 
export default ModifUser;