import React from 'react'

export default function Loader(){
    return (
        <div className="  h-dvh  flex flex-col justify-center items-center p-3 bg-yellow-200 bg-opacity-15">
           <div className=' py-3 animate-bounce'>
           <div className=" shadow-lg animate-spin h-20 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
           </div> 
          
           <div className=' py-3 animate-bounce flex gap-5'>
           <div className=" shadow-lg animate-spin h-20 w-20 bg-gradient-to-r from-blue-500 to-red-500 rounded-full">
           </div>
           <div className=" shadow-lg animate-spin h-20 w-20 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full">
            
            </div></div> 
          
        </div>
    )
}