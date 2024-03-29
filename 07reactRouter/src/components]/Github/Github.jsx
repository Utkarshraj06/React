import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data=useLoaderData();
    // const [data,setdata]=useState([]);
    // useEffect(()=>{
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then((res)=>res.json())
    //  .then(data=>{
    //     setdata(data)
    //  })   
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl"> Github: {data.followers}</div>
    )
}
export default Github

export const githubInfoLoader=async ()=>{
    const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}