import React from 'react'
let arr=[10,20,30,40];
function File3() {
  return (
            // {
            // <div className='flex flex-cols-1 lg:flex-row md:flex-row sm:flex-cols-2 w-full'>
            //  {arr.map((item) => (
            //     <div>{item}</div>
            //   ))}
            //   </div>
            // }
        
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 p-8 w-full">
          {arr.map((item) => (
            <div  className="bg-blue-400 p-12 lg:pt-20 pb-20 w-full">{item}</div>
          ))}
          </div>
   
  )
}

export default File3