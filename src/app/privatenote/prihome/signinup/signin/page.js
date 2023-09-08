"use client"
import Link from 'next/link';
import { useState } from 'react'

const SignIn = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const SignIn =()=>{
        console.log(email);
    }
  return (
    <div>
         <div  style={{display:"flex" ,justifyItems:"center",justifyContent:"center" ,margin:"60px",padding:"40px"}}> 
              <div style={{display:"flex" ,flexDirection:"column",gap:"2px" ,boxShadow:"4px" }}>
                   <h2 style={{}}> Welcom to Your Note </h2>
                    <p style={{marginTop:"20px"}}> please sign In </p>
                    <input type="text" onChange={(e)=>{setemail(e.target.value)}}  placeholder='Email address' style={{height:"30px",marginTop:"4px"}}></input>
                    <input type="text" onChange={(e)=>{setpassword(e.target.value)}}  placeholder='password ' style={{height:"30px"}}></input>
                    <button onClick={SignIn} style={{height:"32px"}}>Continue</button>
                    <p>If you are not Registed ?<Link  style={{textDecoration:"none"}} href={"../../../privatenote/prihome/signinup/signup" }>Sign Up </Link> </p>
              </div>
        </div>
    </div>
  )
}

export default SignIn