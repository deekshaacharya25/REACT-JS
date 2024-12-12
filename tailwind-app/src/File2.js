import React from 'react'
import Beach from "../src/assets/beach.jpg"
let a=[10,20,30,40];
function File2() {
  return (

    /* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  w-full'>
        <div className='bg-yellow-500 p-2  w-full'>1</div>
        <div className='bg-yellow-500 p-2  w-full'>2</div>
        <div className='bg-yellow-500 p-2  w-full'>3</div>
        <div className='bg-yellow-500 p-2  w-full'>4</div>
    </div> */

    // <div className='flex flex-col md:flex-row w-full gap-4 justify-center'>
    //     <div className='bg-red-300 w-full text-center'>
    //         <p>1</p>
    //         <span>Moodbidri</span>
    //         <img src={Beach} alt="beach"/>
    //         </div>
    //     <div className='bg-yellow-300 w-full'>2</div>
    // </div>
    <div className='flex flex-col-reverse  lg:flex-col-reverse md:flex-col sm:flex-row-reverse gap-4  w-full'>
        <div className='bg-yellow-500 p-2  w-full'>1</div>
        <div className='bg-red-400 p-2  w-full'>2</div>
        <div className='bg-blue-300 p-2  w-full'>3</div>
        <div className='bg-green-200 p-2  w-full'>4</div>
    </div> 

  )
}

export default File2