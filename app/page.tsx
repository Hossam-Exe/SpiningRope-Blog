
import Hero from './Components/Hero'
import Post_Card from './Components/Post_Card'

import { groq } from "next-sanity";
import { client } from "../lib/getClient";

import Categories from './Components/Categories';






const postsQuery = groq`
   *[_type=="post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;


export const revalidate = 60 // revalidate at most every 1 min


export default async function Home() {

 
const posts = await client.fetch(postsQuery);





  return (
    <main className='px-[13rem] max-md:px-[6rem] max-sm:px-[2rem] py-6 flex-col justify-center items-center cursor-none bg-white  dark:bg-gradient-black '>

       <Categories /> 
      
    
      <Hero posts={posts} />

      <Post_Card PostLimit={9} posts={posts} />

     

    </main>
  )
}




