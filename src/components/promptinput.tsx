'use client'
import React, { useEffect, useState } from 'react'

const promptinput = () => {
  
   const[input,setinput]=useState("")
  return (
    <div className='m-10 '>
      <form className='flex flex-col lg:flex-row shadow-md shadow-slate-400 border rounded-md lg:divide-x lg:h-16' >
        <textarea 
        value={input}
        onChange={(e)=>setinput(e.target.value)}
        className='flex-1 p-4 outline-none rounded-md'
         placeholder='Enter a Prompt'/>

         <button type='submit'
         className={`p-4 font-bold ${input ? ' bg-violet-700 text-white transition-colors duration-200':'text-gray-400 cursor-not-allowed'}`}
         disabled={input}
        
        >Generate</button>
        <button className='bg-violet-500 text-white transition-colors duration-200 font-bold disabled:text-gray-300 
        disabled:cursor-not-allowed disabled:text-gray-400' type='button'>use suggestion</button>
        <button type='button'> new suggestion</button>
      </form>
    </div>
  )
}

export default promptinput
