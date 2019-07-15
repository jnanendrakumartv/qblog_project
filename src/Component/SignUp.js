import React,{Component} from 'react';
import {connect} from 'react-redux';
import logo from '../images/logo.png';
import blog from '../images/blog.png';



class SignUp extends Component{
    render(){
        return(
            <div className="main">
                <div className="main">
    <div className="row">
    <div className="col-lg-1 col-xs-1 col-sm-1 col-md-1">
    <img src={logo} alt={"logo"} height="40" width="40"></img></div>
    <div className="col-lg-8 col-xs-8 col-sm-8 col-md-8"></div>
    <div className="col-lg-3 col-xs-3 col-sm-3 col-md-3">
        <button id="signupbutton">SignUp</button>
        <button id="signinbutton">SignIn</button>
    </div>
    </div>
    <div className="signupdashboard">
        <div className="row">
        <div className="col-lg-6 col-xs-6 col-sm-6 col-md-6"><img src={blog} alt={"blog"} height="250" width="300"></img></div>
        <div className="col-lg-6 col-xs-6 col-sm-6 col-md-6">
            <h2>Sign Up</h2> <br/>
            <label>First Name</label> <br/>
            <input placeholder="first name"></input><br/>
            <label>Last Name</label> <br/>
            <input placeholder="last name"></input><br/>
            <label>Email</label> <br/>
            <input placeholder="email"></input><br/>
            <label>Password</label> <br/>
            <input placeholder="password"></input><br/>
            <label>ConformPassword</label> <br/>
            <input placeholder="conform password"></input><br/>
            <button>Submit</button> <label>Already Have an Account</label>
        </div>

        </div>

    </div>
    
    <div className="HomePagefooter">
        <div className="row">
        <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4"></div>
        <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4"> 
        <div className="row">
        <div className="col-lg-3 col-xs-3 col-sm-3 col-md-3"></div>
        <div className="col-lg-6 col-xs-6 col-sm-6 col-md-6">
        <p><b>Qwinix</b><br/> Horizon, HIEMA Convention Center Road,
             Hebbal Industrial Estate 5,Mysuru, Karnataka 570016</p></div>
             <div className="col-lg-3 col-xs-3 col-sm-3 col-md-3"></div>
             </div> </div>
        <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4"></div>
        </div>
    </div>
</div>
                
            </div>
        );
    }
}
export default SignUp;