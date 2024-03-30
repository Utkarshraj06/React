import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";


function Login(){
    const [username,SetUsername]=useState('')
    const [password,Setpassword]=useState('')
    const {setUser}=useContext(UserContext)
    const submitHandling=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    return(
        <div>
            <h2>Login</h2>
           <input type="text" value={username} onChange={(e)=>SetUsername(e.target.value)} placeholder="username" />
           <input type="text" value={password} onChange={(e)=>Setpassword(e.target.value)} placeholder="password" />
           <button type="submit" onClick={submitHandling}> Submit </button>
           

        </div>
    )
}
export default Login