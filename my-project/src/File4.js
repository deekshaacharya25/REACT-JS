import React, {useState,use} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function File4() {
    const [content,setContent]=useState([])

    useEffect(()=>{
        const handleFetch =async()=>{
            try{
                const res=await axios.get(`https://jsonplaceholder.typicode.com/users`);
                setContent(res.data);
                console.log("Success",res.data);
            } catch(error){
                console.log("Failed");
            }
        };
        handleFetch();

    },[])
    
    // const handleFetch =async()=>{
    //     try{
    //         const res=await axios.get(`https://jsonplaceholder.typicode.com/users`);
    //         setContent(res.data);
    //         console.log("Success",res.data);
    //     } catch(error){
    //         console.log("Failed");
    //     }
    // };
  return (
    <div>
    <div>
    {content.map((item) => (
      <div className="flex flex-row gap-20 text-left text-slate-300 bg-slate-900 w-full"key={item.id}>
        <p className='items-start w-full '>{item.id}</p>
        <p className='items-start w-full'>{item.name}</p>
        <p className='items-start w-full'>{item.username}</p>
        <p className='items-start w-full'>{item.email}</p>
        <p className='items-start w-full'>{item.address.street}</p>
        </div>
    ))}
  </div>
  <button className='bg-gray-900 text-white p-6 mt-7' onClick={handleFetch}>Click</button>
  </div>
  )
}

export default File4