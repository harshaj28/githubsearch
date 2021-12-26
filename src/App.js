import React,{useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import firebase from 'firebase/app';
import 'firebase/auth';
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import PageNotFound from "./Pages/PageNotFound"
import { UserContext } from './Context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from "./Config/firebase.Config"

firebase.initializeApp(firebaseConfig)

const App=()=> {

  const [user,setUser]= useState(null);


  return(
      <Router>
        <ToastContainer></ToastContainer>
        <UserContext.Provider value={{user,setUser}}>
        <Header></Header>
          <Switch>
            <Route exact path="/githubsearch" component={Home}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signup" component={Signup}/>
            <Route component={PageNotFound}/>
          </Switch>
          <Footer></Footer>
        </UserContext.Provider>
      </Router>
  )
}

export default App;
