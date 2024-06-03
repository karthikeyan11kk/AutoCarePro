import React from 'react'
import { Navigate } from 'react-router-dom';

function Public (props){
  if(localStorage.getItem("token"))
    {
        return <Navigate to="/userdashboard" />
    } else {
        return props.children;
    }
}

export default Public