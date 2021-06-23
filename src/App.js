import React,{useState,useEffect} from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { Container } from 'react-bootstrap';
import './App.css';
// import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import Passengers from './components/Passengers'
import Header from './components/Header'


const App = () => {
  
 
  return (
    <>
    <Header />
        <Switch>
          <Route
            exact
            path="/"
          >
<HomePage />
</Route>

          <Route
            exact
            path="/passengers"
          >
<Passengers />
</Route>
        
        </Switch>
        </>
  );
}

export default App;