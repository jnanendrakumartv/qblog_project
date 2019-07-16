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
        this.state={ firstname:'',lastname:'',email:'',password:'',
        firstnameA:'',lastnameA:'',mail:'',pwd:'',array:[],
       
        }
    }
    handleSubmit1=(event)=> {
        browserHistory.push("/signup");
    }
    handleSubmit=(event)=>{
        browserHistory.push("/signin")
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=>{
        debugger;
        
        let j=0;
        let reqobj={
            firstname1:this.state.firstname,
            lastname1:this.state.lastname,
            emaill:this.state.email,
            password1:this.state.password 
        }
        let ary=this.state.array.push(reqobj)
        this.setState({ary});
        let fnamel=this.state.firstname.length, lnamel=this.state.lastname.length, emaill=this.state.email.length, pwdl=this.state.password.length;
        let reg_firstnameA=/^[A-Za-z]{5,10}$/;
        let reg_lastnameA=/^[A-Za-z]{5,10}$/;
        let reg_mail= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        let reg_pwd=/^[@#][A-Za-z0-9]$/;
       
        if(fnamel===0) this.setState({ firstnameA:'Firstname must required'});
        else if(!reg_firstnameA.test(this.state.firstname)) this.setState({ firstnameA:'Invalid Firstname'});
        else j++; 
        
        if(lnamel===0) this.setState({lastnameA:'Lastname must required'});
        else if(!reg_lastnameA.test(this.state.lastname)) this.setState({lastnameA:'Invalid Lastname'}); 
        else j++;

        if(emaill===0) this.setState({user:'Email must required'});
        else if(!reg_mail.test(this.state.email)) this.setState({mail:'Invalid Email'});
        else j++;

        if(pwdl===0) this.setState({pwd:'Password must required'});
        else if(!reg_pwd.test(this.state.password)) this.setState({pwd:'Invalid Password'});
        else j++;

        if(j>3) {
            browserHistory.push("home");
        }
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
                          <input className="input_box " placeholder="Last Name.." type="text" name='firstname' onChange={this.handleChange}></input><br/>
                          <p><b>{this.state.firstnameA}</b></p>
                          <label className="label">Last Name</label><br/>
                          <input className="input_box " placeholder="Last name." type="text" name='lastname' onChange={this.handleChange}></input><br/>
                          <p><b>{this.state.lastnameA}</b></p>
                          <label className="label">Email</label><br/>
                          <input className="input_box " placeholder="email." type="text" name='email' onChange={this.handleChange}></input><br/>
                          <p><b>{this.state.mail}</b></p>
                          <label className="label">Password</label><br/>
                          <input className="input_box " placeholder="password." type="password"  name='password' onChange={this.handleChange}></input><br/>
                          <p><b>{this.state.pwd}</b></p>
                          {/* <label className="label">ConformPassword</label><br/>
                          <input className="input_box " placeholder="conform password."></input><br/> */}
                          <button className="submitbutton" onClick={this.handleSubmit}>Submit</button><label className="allareadyaccount" onClick={this.handleSubmit}>Already have an Account</label>
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