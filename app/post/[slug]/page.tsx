import { client } from "@/lib/getClient";
import { urlFor } from "@/lib/getClient";
import Image from "next/image"
import { groq } from "next-sanity";
import PortableText from "react-portable-text";
import { CalendarIcon } from "@heroicons/react/24/outline"
import { portableTextSerializer } from "../../Components/portableTextSerializer"
import type { Metadata } from 'next'




type Props = {

  params: {
    slug: string;
  }

}

 export const generateMetadata=({ params }: Props): Metadata =>{
  return{
      title: `${params.slug.replaceAll('-',' ')}`,
      description: `${params.slug.replaceAll('-',' ').trimEnd()}`,
  }
 }


export const revalidate = 60 // revalidate at most every 1 hour

export async function generateStaticParams(){

  const Query = groq`
  *[_type=="post"]
  {
   slug,
   description
 } `;

  const slugs : Post[] = await client.fetch(Query)
  const slugRoutes=slugs.map((slug)=> slug.slug.current)

  return slugRoutes.map(slug=>({
    slug,
  }))

}

async function Post({ params: { slug } }: Props) {
  const postsQuery = groq`
    *[_type=="post"&& slug.current == $slug][0]
    {
     ...,
     author->,
     categories[]->
   } 
 `;


  const post: Post = await client.fetch(postsQuery, { slug })

  return (
    <main key={post._id} className="bg-white   dark:bg-gradient-black px-[13rem] max-md:px-[6rem] max-sm:px-[2rem] py-12 flex-col justify-start items-center cursor-none  " >
   
      <article>
        <header className=" flex justify-between items-center">
          {post.categories.map((category) => (

            <div key={category._id} className=" flex justify-center items-center gap-4 ">
              <p className="  text-base  whitespace-nowrap  mx-2 bg-cta dark:bg-copy-primary/80 
              text-copy-secondary dark:text-copy-secondary
               rounded p-1 font-bold  w-full  ">{category.title}</p>

            </div>
          ))}
          
          <div className="  fixed  -z-10  scale-[2]  w-full h-full ">
            <div  className=" fixed  w-full bg-black/90  h-full">

            </div>
          
          </div>
          
          

          <div className="flex gap-2 w-full  justify-end items-center">
            <CalendarIcon className=" h-5 w-5 text-copy-primary dark:text-copy-primary" />
            <p className="font-Louis text-copy-primary dark:text-copy-primary text-sm ">{new Date(post._createdAt).toLocaleDateString("en-us", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}</p>
          </div>

        </header>


        <section className=" w-full      ">
          <h1 className=" text-copy-primary dark:text-copy-primary text-5xl py-10  font-bold">{post.title}</h1>
          <Image
            className=" border-border dark:border-border border-4   mb-4 rounded w-full h-48 object-cover"
            src={urlFor(post.mainImage).url()}
            alt={"Post Image"}
            width={"1000"}
            height={"1000"}
          />

        

        </section>


        <PortableText content={post.body}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          serializers={portableTextSerializer}  />
      
      
      

      </article>
    </main>
  )


}



export default Post