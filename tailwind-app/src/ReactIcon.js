import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";
import { IoChatbubbleSharp } from "react-icons/io5";
import { BsAlarmFill } from "react-icons/bs";



function ReactIcon() {
  return (
    <div className='flex flex-col items-center bg-yellow-200 w-full h-screen gap-8'>
    <div className='font-mono text-3xl'>React Icons</div>
    <IoMdSettings className="text-5xl text-emerald-950"/>
    <BsBellFill className="text-5xl  text-emerald-950"/>
    <IoChatbubbleSharp className="text-5xl  text-emerald-950"/>
    <BsAlarmFill className="text-5xl  text-emerald-950"/>
    </div>

  )
}

export default ReactIcon