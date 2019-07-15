import React,{Component} from 'react';
import {connect} from 'react-redux';
import logo from '../images/logo.png';
import blog from '../images/blog.png';

class HomePage extends Component{
    render(){
        return(
           
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
    <div className="homepagedashblog">
    <div className="row">
    <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4"></div>
    <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4">
        <h5 className="text" >Publish Your passions, your way</h5>
        <h6 className="text">Create a unique and beautiful blog.</h6>
        <button className="createblogbutton">Create Your Blog</button><br/><br/>
        <img src={blog} alt={"blog"} height="250" width="300"></img>
    </div>
    <div className="col-lg-4 col-xs-4 col-sm-4 col-md-4"></div>
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

        );
    }
}
export default HomePage;