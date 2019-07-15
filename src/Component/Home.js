import React,{Component} from 'react';
import {connect} from 'react-redux';
import logo from '../images/logo.png';
import qblg from '../images/qblg.jpg';
import '../CSS/Home.css';

class Home extends Component{
    render(){
        return(
           <div className="main">
               <div className="row header">
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img src={logo} alt={"logo"} height="60" width="60"></img> </div>
               <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signupbutton" onclick="window.location.href='./Signup1.js'">SignUp</button></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signinbutton">SignIn</button></div>
               </div>
               <div className="dashboard">
               <div className="row dash_board">
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><br/>
                   <h3 id="h3">Publish Your passions, your way</h3>
                   <h5 id="h5">Create a unique and beautiful blog.</h5>
                   <div className="row button">
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><button className="createbutton">Create Your Blog</button></div>
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                   </div> <img src={qblg} alt={"blog"} height="320" width="500"></img>
               </div>
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
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
export default Home;