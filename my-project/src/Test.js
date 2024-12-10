import React from 'react'

function Test(props) {
    let a=[1,2,3,4,5];
    let b=["Apple","Berry","Guava","Kiwi"];
  return (
    <div>
        {/* <h1>Hello, {props.name}</h1> */}
        
        {a.map((item)=>(
            <li key={item}>{item*item}</li>
        ))}
        <div>{b.map((item)=>(
            <li key={item}>{item}</li>
        ))}</div>
    </div>
  )
}

export default Test