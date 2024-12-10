import React from 'react'
import FileA from './FileA'
export default function FileB(props) {
  return (
    <div>
    {/* <div>FileB</div> */}
    <h1>Hello, {props.name}</h1>
    {/* <FileA/> */}
    </div>
  )
}
