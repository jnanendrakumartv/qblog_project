import React,{Component} from 'react';
import {connect} from 'react-redux';
import Real from '../images/Real.png';
import qblg from '../images/qblg.jpg';
import '../CSS/Home.css';
import '../CSS/Signup.css';
import browserHistory from "../Utils/browserHistory"


class Signup1 extends Component{
    constructor(props){
        super(props);
        this.state={ firstname:'',lastname:'',email:'',password:'', conformpassword:'',
        firstnameA:'',lastnameA:'',email:'',pwd:'',array:[],
       
        }
    }
    handleSubmit1=(event)=> {
        browserHistory.push("/signup");
    }
    handleSubmit=(event)=>{
        browserHistory.push("/signin")
    }
    render(){
        return(
           <div className="main">
               <div className="row header">
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="logo" src={Real} alt={"Real"} height="60" width="60"></img></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>
               <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signupbutton" onClick={this.handleSubmit1}>SignUp</button></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signinbutton" onClick={this.handleSubmit}>SignIn</button></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
               </div>
               <div className="Signupdashboard">
                  <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="row">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"><img className="image" src={qblg} alt={"blog"} height="450" width="500"></img></div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      </div>                      
                      </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="rowsignup">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                          <h2 className="signuptext">Sign Up</h2>
                          <label className="label">First name</label><br/>
                          <input className="input_box " placeholder="Last Name.." name='firstname'></input><br/>
                          <label className="label">Last Name</label><br/>
                          <input className="input_box " name='lastname' placeholder="Last name.."></input><br/>
                          <label className="label">Email</label><br/>
                          <input className="input_box " name='email' placeholder="email."></input><br/>
                          <label className="label">Password</label><br/>
                          <input className="input_box " placeholder="password."></input><br/>
                          <label className="label">ConformPassword</label><br/>
                          <input className="input_box " placeholder="conform password."></input><br/>
                          <button className="submitbutton">Submit</button><label className="allareadyaccount" onClick={this.handleSubmit}>Already have an Account</label>
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      </div>
                  </div>
                  </div>
               </div>
               <div className="footer">
               <div className="row footer">
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               <div className="row">
               <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                   <div className="row">
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                  </div><h5 className="qwinix"><b>Jk Technologies</b></h5>
                <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru,Karnataka.</p>
               </div>
               <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
               </div>
               </div>
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
               </div>
               </div>
           </div>
        );
    }
}
export default Signup1;