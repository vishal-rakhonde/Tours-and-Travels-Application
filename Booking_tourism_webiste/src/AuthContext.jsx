import { createContext, useContext, useState } from "react";
import { Children } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
// provides login function here for props drilling
export const AuthProvider = ({children})=>{

    const [user,setUser] = useState(null);
    console.log("User ",user)

    // Login request goes to /signin
    const login =async(email,password,navigate)=>{
        const response =await fetch("http://127.0.0.1:3000/signin",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email,password}),
        })

        const r = await response.json();

        if(r.success){
            if(r.token===undefined){
                
                return;
            }
            document.cookie="token="+r.token+"; expires="+86400;
            localStorage.setItem("userId",r.userId);
            setUser({userId:r.userId,role:r.userRole})
            localStorage.setItem('r',r.userRole);
            navigate("/")
            
        }
    }

    const logout =async(navigate)=>{
        console.log("Handle logout clicked");
        const expiryDate = new Date(Date.now() + 0 * 1000);
        document.cookie = `token=;expires=${expiryDate.toUTCString()}`;
        localStorage.clear();
        setUser(null)
        navigate("/signup")
    }
//function work for user booking
    const fetchuserBookings = async(data,setData)=>{
        const userId = localStorage.getItem("userId")
    
        const listData = [];
    
        const response = await fetch(`http://127.0.0.1:3000/userBookings/${userId}`);
    
        const user_data = await response.json();
        
        console.log({user_data});
    
        for(const i of user_data.rows){
            console.log({i})
            const response2 = await fetch(`http://127.0.0.1:3000/get/${i.booked_state_id}`);
    
            const location_data = await response2.json();
            listData.push(location_data.data);
        }
        console.log({listData})
        setData(listData);
    
    }
    
    async function removeBooking( id ) {
      const response = await fetch(`http://127.0.0.1:3000/removeBooking/${id}`,{
        method:"POST"
      });
    
      const data = await response.json();
    
      
    
    
    }

    return (
        <AuthContext.Provider value={{user,login,logout,fetchuserBookings,removeBooking}}>
            {children}
        </AuthContext.Provider>
    )
    
}


export const useAuth = ()=>useContext(AuthContext);