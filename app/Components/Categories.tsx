import {  groq } from "next-sanity";
import { client } from "../../lib/getClient";

import Link from "next/link";
import ClientRoute from "./ClientRoute";



const getCategoriesQuery = groq`*[_type == "category"] {
  

    title,
    slug,
  
  
}`;

export default async function Categories() {

  
  const categories = await client.fetch(getCategoriesQuery);

  return (
    <details className="my-4    ">
            <summary className="  uppercase bg-cta dark:bg-cta dark:hover:bg-cta-active h-[30px] rounded border-white/20 hover:text-copy-secondary 
               p-1 px-2 font-bold dark:hover:text-copy-secondary transition-all duration-100 hover:scale-105 
               whitespace-nowrap  w-36  ">Categories</summary>

                 {categories?.length > 0 ? (
                        categories?.map((category:any, index:number) => {
                            return (
                               <header key={index} className=" inline-block"  > 
                              <ClientRoute route={`/categories/${category.slug.current}`} >
             
                              <div className="   text-base  bg-cta dark:bg-cta dark:hover:bg-cta-active
                                h-[30px] rounded border-white/20  p-1 font-bold
                                dark:hover:text-copy-secondary transition-all duration-100 hover:scale-105 
                              whitespace-nowrap m-2  "  > {category.title}</div>
                               </ClientRoute>
                             </header>
                            );
                        })
                    ) : (
                        <p>No Category Found</p>
                    )}

          
     
    </details>
  )
}

