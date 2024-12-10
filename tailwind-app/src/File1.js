import React,{useCount, useState} from 'react'

function File1() {
    const[count,setCount]=useState(0);
    const handleButton1=()=>(
        setCount(count+1)
    )
    const handleButton2=()=>(
        setCount(count-1)
    )
  return (
    <div>
        <p>{count}</p>
        <button className='bg-red-500' onClick={handleButton1}>Increase</button>
        <button className='bg-blue-500' onClick={handleButton2}>Decrease</button>
    </div>
  )
}

export default File1