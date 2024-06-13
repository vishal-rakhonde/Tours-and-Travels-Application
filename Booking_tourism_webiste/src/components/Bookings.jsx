import React, { useEffect, useState } from "react"
import Cardcontainer from "./Cardcontainer";
import { useAuth } from "../AuthContext";
function Bookings(){
    const {removeBooking,fetchuserBookings} = useAuth();
    const [data,setData] = useState([])


    useEffect(()=>{
        fetchuserBookings(data,setData);
    },[])


    

    return (
        <>
        <h1>Bookings</h1>
        <Cardcontainer data={data??[]} />
        </>
    )
}

export default Bookings