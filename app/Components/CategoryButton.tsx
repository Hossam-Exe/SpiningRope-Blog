"use client"


import {useState} from "react"




function CategoryButton({children} :any) {

 const[CatToFillter,setCatToFillter]=useState("")


  return (
    <button  onClick={()=>{
       setCatToFillter(children.title)
        
       }}
       className="  text-base  bg-white/20  h-[30px] rounded border-white/20 hover:bg-white/90  
       p-1 font-bold hover:text-[#333333] transition-all duration-100 hover:scale-105 
       whitespace-nowrap m-2  "
       key={children._id}>
        {...children}
        </button>
  )
}

export default CategoryButton