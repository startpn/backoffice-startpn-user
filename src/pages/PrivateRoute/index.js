import React from 'react'

import {Navigate} from 'react-router-dom'

const PrivateRoute = ({ children }) =>{


    const token =  localStorage.getItem("@token")

    
    return token != undefined ? children : <Navigate to="/"/>

}

export default PrivateRoute