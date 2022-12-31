import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Dashboard from '../pages/Dashboard';

/* Pages */

import Landing from '../pages/Landing'
import FunctionaLities from '../pages/FunctionaLities'

import Register from '../pages/Register'

/* Private Pages */
import PrivateRoute from '../pages/PrivateRoute';


const AppStack = () =>{

    return(

        <Router>

        <Routes>
        <Route path='/'  element={<Landing/>} />
        <Route path='/register'  element={<Register/>} />

        <Route path='/dashboard'  element={<Dashboard/>} />
        <Route path='/functionalities'  element={<FunctionaLities/>} />

        </Routes>
        </Router>

    )

}

export default AppStack