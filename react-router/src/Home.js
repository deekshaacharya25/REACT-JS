import React from 'react'
import {useNavigate} from "react-router-dom"
function Home() {
    let navigate=useNavigate()
    console.log('Home');
    const handleButton=()=>{
navigate("/contact");
    }
  return (
    <div>
        <button onClick={handleButton}>Contact</button>
    </div>
  )
}

export default Home