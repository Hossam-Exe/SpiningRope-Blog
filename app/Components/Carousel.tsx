"use client"
import { useState, useEffect } from "react"
import Image from 'next/image'
import { urlFor } from "@/lib/getClient";
import ClientRoute from "./ClientRoute";




type Props ={
    posts: Post[];
  autoSlide:boolean;
  autoSlideInterval:number
}

export default function Carousel({
  posts,
  autoSlide = false,
  autoSlideInterval = 3000,
}:Props) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? posts.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === posts.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (

    <div className=" relative overflow-hidden bg-slate-400 rounded-md h-[15rem]  my-4  border-white border-4  w-full ">
      <div
        className="    w-full h-full transition-transform ease-out duration-500 "
        style={{ transform: `translateY(-${curr * 100}%)` }}
      >
        {posts.map((post)=>(
        
        <ClientRoute  key={post._id} route={`/post/${post.slug.current}`}> 
       
         <Image
          className=" border-white border-4  h-full object-cover   w-full   "
          src={urlFor(post.mainImage).url()}
          alt={"Post Image"}
          width={"500"}
          height={"500"}
          />  
        <span className=' absolute top-0 left-0 w-full h-full  bg-black/20'></span>
     
        <div className=' absolute  left-0 p-4 w-[70%]  bottom-0 pr-8 ' style={{ transform: `translateY(-${curr * 100}%)` }}>
          <h2 className=" text-cyan-50  line-clamp-2  text-[1.5rem]  font-bold">{posts[curr].title}</h2>
          <p className=" text-white/50    font-Louis overflow-clip w-[70%]  line-clamp-2">{posts[curr].description}</p>
        </div>
        </ClientRoute> 
        ))}
      </div>


    

      
      
    </div>
    
  )
}