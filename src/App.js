import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './Component/HomePage';
import SignUp from './Component/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/first" component={HomePage}></Route>
           <Route exact path="/signup" component={SignUp}></Route>        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
