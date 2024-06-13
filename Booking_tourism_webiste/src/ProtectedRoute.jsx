import React from "react"
import { useAuth } from "./AuthContext"
import {  Navigate, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const ProtectedRoute = ({children,roles})=>{
    const navigate = useNavigate();
    const {user,logout} = useAuth();
    console.log("children and roles",children,roles)
    // return user?<Component {...props} />:<Navigate to="/signup" />;
    if(localStorage.getItem('r')!==null && localStorage.getItem('r').includes(roles) ){
        return (<>
            {children}
            </>
        )
    }else{
         logout(navigate);
         return <Navigate to="/signup" />
    }
    
}

export default ProtectedRoute;