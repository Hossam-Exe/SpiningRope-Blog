"use client"
import { urlFor } from "@/lib/getClient";
import Image from "next/image"

import ClientRoute from "./ClientRoute";

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";


type Props = {
  posts: Post[];
  PostLimit:number;
}

export default  function Post_Card({ posts,PostLimit }: Props) {

  const [currentItems, setCurrentItems] = useState(posts||PostLimit);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);


  useEffect(() => {
    const endOffset = itemOffset + PostLimit;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / PostLimit));
  }, [itemOffset, PostLimit, posts]);



  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * PostLimit) % posts.length;
    setItemOffset(newOffset);
  };


  return (
    <>
  <div className=' grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-y-6 gap-x-4     '>
   {posts?.length > 0 ? (
    currentItems&& currentItems.slice(0,PostLimit).map((post) => (
     
      <ClientRoute key={post._id} route={`/post/${post.slug.current}`}>
      <article  className=" flex   justify-center items-start gap-2 flex-col  
      transition-all duration-200 hover:scale-[1.02] w-full shadow-md">

        <Image
          className=" border-border dark:border-border border-4  rounded w-full h-48   object-cover"
          src={urlFor(post.mainImage).url()}
          alt={"Post Image"}
          width={"500"}
          height={"500"}
          
        />

        <h2 className="  text-copy-primary dark:text-copy-primary h-[56px]  line-clamp-2 text-lg hover:underline   font-bold">{post.title}</h2>
        <p className=" text-copy-primary/80 dark:text-copy-primary/80    font-Louis overflow-clip  line-clamp-2">{post.description}</p>

        <hr className="  border-border dark:border-border   w-full h-[1px] " />

        <div className="   flex gap-2  justify-center  items-center flex-wrap  w-full p-1 ">
          <div className="flex gap-2  flex-1 justify-start items-center">

            <p className="font-Louis text-[0.8rem] font-bold text-copy-primary dark:text-copy-primary ">{new Date(post._createdAt).toLocaleDateString("en-us", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}</p>
          </div>

          {post.categories.map((category) => (
            <div key={category._id} className=" flex   justify-start items-center gap-2 ">
              <p className=" text-xs bg-cta dark:bg-copy-primary/80 rounded p-1 font-bold 
                text-copy-secondary dark:text-copy-secondary  whitespace-nowrap  ">{category.title}</p>

            </div>
          ))}
        </div>

        <div className=" w-full"> 
         

            <div className="  bg-cta dark:bg-cta  h-[30px] rounded border-white/20 
            dark:hover:bg-cta-active border flex justify-center items-center    
            hover:text-copy-secondary dark:hover:text-copy-secondary
              transition-all duration-100 hover:scale-105 mt-4 ">
              <button className=" font-Louis font-bold text-white/85   flex justify-center items-center gap-2 ">Read More

              </button>

            </div>
          
        </div>
      </article>
      </ClientRoute>
      ))
      ) : (
        <div className='  flex   ml-4    h-96 justify-center items-center gap-4 p-4 mb-12'>
        <h2 className='text-2xl   text-copy-primary dark:text-copy-primary font-MoonGet 
        uppercase opacity-30  whitespace-nowrap tracking-widest'>No Category Found</h2>
      </div>
      
      )}

  </div >
    <div className=" mt-6 flex   justify-center items-center  w-full gap-2 " >
       <hr className='  border-border/30 dark:border-border/30  h-[1px] w-[20rem]' />
       <ReactPaginate
        className="   flex justify-center items-center gap-2"
        activeClassName=" bg-cta/50 dark:bg-cta-active text-copy-secondary dark:hover:text-copy-secondary  "
        breakLabel="..."
        breakClassName=" text-copy-primary dark:hover:text-copy-primary"
        nextLabel=">"
        nextClassName="bg-cta dark:bg-cta dark:hover:bg-cta-active h-[20px] rounded border-white/20 hover:text-copy-secondary 
        p-1 px-2 font-bold dark:hover:text-copy-secondary transition-all duration-100 hover:scale-105 
        whitespace-nowrap flex justify-center items-center"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousLabel="<"
        previousClassName="bg-cta dark:bg-cta dark:hover:bg-cta-active h-[20px] rounded border-white/20 hover:text-copy-secondary 
        p-1 px-2 font-bold dark:hover:text-copy-secondary transition-all duration-100 hover:scale-105 
        whitespace-nowrap flex justify-center items-center"
        pageClassName=" bg-cta dark:bg-cta  h-[30px] w-[30px]    rounded border-white/20 
        dark:hover:bg-cta-active border flex justify-center items-center    
        hover:text-copy-secondary dark:hover:text-copy-secondary
          transition-all duration-100 hover:scale-105  font-bold    "
          
         
       />
       <hr className=' border-border/30 dark:border-border/30  h-[1px] w-[20rem]' />
    </div>

  

  </>
  )
}

