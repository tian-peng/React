import React from 'react';
import {BrowserRouter as Router,Route,Switch}from "react-router-dom"
import Head from "./components/head/Head";
import Home from "./components/home/Home";
import Foot from "./components/foot/Foot";
import Sin from "./components/home/Sin";
import Singo from "./components/home/Singo";
import Login from "./components/login/Login"
function App() {
  return (
      <div className="App">
          <Head/>
          <Router>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/singo' component={Singo}/>
                  <Route path='/sin/:id' component={Sin}/>
                  <Route path='/login' component={Login}/>
              </Switch>
          </Router>
          <Foot/>

      </div>
  );
}

export default App;

