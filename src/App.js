import React, { useState, useEffect, Component } from 'react';
import './App.css';
import axios from 'axios'
import LoadingIndicator from './components/loading.js'
import { Nav, NavItem, NavLink } from 'reactstrap';
// import logo from './components/logo_transparent.png'
import Homepage from './components/Homepage'
// import UserImages from './components/UserImages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserProfile from './components/userProfile'
import Navbar from './components/NavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    // performing a GET request
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        console.log(result)
        // If successful, we do stuffs with 'result'
        setUsers(result.data)
        setIsLoading(false)
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
  }, [])



  if (isLoading) {
    return <LoadingIndicator />
  }


  return (
    <div>
        <ToastContainer />
        <Navbar/>
    
    

      <Switch>
        <Route exact path="/">
          <Homepage users={users}/>
        </Route>
        <Route path="/users/:id">
          <UserProfile users={users}/>
        </Route>
      </Switch>

      {/* <h1>Home Page</h1>
      <ul>
        {users.map(user => (
          <li>
            <div className={classes.root}>
              {<Avatar alt="profileImage" src={user.profileImage}/>}
            </div>
            <div>
            {user.username} 
            </div>          
          </li>


            ))}
      </ul> */}
    </div>
      );
    }
    
    export default App;
    