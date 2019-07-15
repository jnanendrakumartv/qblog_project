import React,{Component} from 'react';
import {connect} from 'react-redux';
import logo from '../images/logo.png';
import qblg from '../images/qblg.jpg';
import '../CSS/Home.css';
import '../CSS/Signup.css';

class Signup1 extends Component{
    render(){
        return(
           <div className="main">
               <div className="row header">
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img id="image" src={logo} alt={"logo"} height="60" width="60"></img> </div>
               <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signupbutton">SignUp</button></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signinbutton">SignIn</button></div>
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
                          <h3 className="signuptext">Sign Up</h3>
                          <label className="label">First Name</label><br/>
                          <input className="input_box " placeholder="first name.."></input><br/>
                          <label className="label">Last Name</label><br/>
                          <input className="input_box " placeholder="lasst name.."></input><br/>
                          <label className="label">Email</label><br/>
                          <input className="input_box " placeholder="email."></input><br/>
                          <label className="label">Password</label><br/>
                          <input className="input_box " placeholder="password."></input><br/>
                          <label className="label">ConformPassword</label><br/>
                          <input className="input_box " placeholder="conform password."></input><br/>
                          <button className="submitbutton">Submit</button><label className="allareadyaccount">Already have an Account</label>
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
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><h4><b>Qwinix</b></h4></div>
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                  </div>
                <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru,Karnataka 570016, India</p>
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