import React, {useState} from 'react'
import axios from 'axios'
function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleLogin=async()=>{
     
      const payLoad={
        email:email,
        password:password,
      };
      try{
        const response = await axios.post(`https://reqres.in/api/login`,payLoad);
        localStorage.setItem("login",response.data.access_token);
        console.log("Success",response);
      } catch(error){
        console.log("Failed");
      }
    };
  return (
    <div>
        <input
        type="text"
        placeholder="email"
        name="email"
        value={email}
        className="border-2 border-black"
        onChange={(e)=>setEmail(e.target.value)}
       />
     <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        className="border-2 border-black"
        onChange={(e)=>setPassword(e.target.value)}
       />
    <button onClick={handleLogin}>Submit</button>

    </div>
  )
}

export default Login