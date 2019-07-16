import React,{Component} from 'react';
import {connect} from 'react-redux';
import Real from '../images/Real.png';
import qblg from '../images/qblg.jpg';
import browserHistory from "../Utils/browserHistory"
import '../CSS/Home.css';
import '../CSS/Signin.css';

class SignIn extends Component{
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
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img id="logo1" src={Real} alt={"Real"} height="60" width="60"></img></div>
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
                          <h3 className="signintext">Sign In</h3>
                          <label className="label">Email</label><br/>
                          <input className="input_box " placeholder="Email....."></input><br/>
                          <label className="label">Password</label><br/>
                          <input className="input_box " placeholder="Password...."></input><br/>
                          <button className="submitbutton">Submit</button>
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
export default SignIn;