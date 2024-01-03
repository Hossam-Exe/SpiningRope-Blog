
import { client, urlFor } from "@/lib/getClient";
import Image from "next/image"
import { CalendarIcon } from "@heroicons/react/24/outline"
import ClientRoute from "../../Components/ClientRoute";
import { groq } from "next-sanity";
import { Metadata } from "next";


interface Props {
  params: {
      slug: string;
  };
}
export const generateMetadata=({ params }: Props): Metadata =>{
  return{
      title: `Categories/${params.slug.replaceAll('-',' ')}`,
  }
 }




export default async function Post_Card_Category({ params: { slug } }: Props) {

const postsQuery = groq` *[_type == "post" && $slug in categories[]->slug.current]{
  _createdAt,
  title,
  description,
  body,
  author -> ,
  mainImage,
  slug,
  "category": categories[]-> {title,slug},
  categories[]->,
  }`;


  const posts = await client.fetch(postsQuery,{slug});

  return (
    <main className="px-[8rem]  max-md:px-[3rem] py-4 cursor-none ">
      <header className=" my-5">
      <h1 className=" text-copy-primary dark:text-copy-primary  line-clamp-2  text-[1.5rem] 
            font-bold">
         { `Categories - ${slug.replaceAll('-',' ')}`}
           </h1>
      </header>
     

     <div className=' grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-y-4 gap-x-4     '>
  {posts?.length > 0 ? (
     posts.map((post:any) => (
      
      <article key={post._id} className=" flex   justify-center items-start gap-2 flex-col  w-full shadow-md">

        <Image
          className="border-border dark:border-border border-4  rounded w-full h-48 object-cover"
          src={urlFor(post.mainImage).url()}
          alt={"Post Image"}
          width={"500"}
          height={"500"}
        />

        <h2 className=" text-copy-primary dark:text-copy-primary h-[56px]  line-clamp-2 text-lg   font-bold">{post.title}</h2>
        <p className=" text-copy-primary/80 dark:text-copy-primary/80    font-Louis overflow-clip  line-clamp-2">{post.description}</p>

        <hr className="    border-border/30 dark:border-border/20  w-full h-[1px] " />

        <div className="   flex gap-2  justify-center  items-center flex-wrap  w-full p-1 ">
          <div className="flex gap-2  flex-1 justify-start items-center">

            <p className="font-Louis text-[0.8rem] font-bold text-copy-primary dark:text-copy-primary ">
              {new Date(post._createdAt).toLocaleDateString("en-us", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}</p>
          </div>

          {post.categories.map((category:any) => (
            <div key={category._id} className=" flex   justify-start items-center gap-2 ">
              <p className=" text-xs  bg-cta dark:bg-copy-primary/80  rounded p-1 font-bold 
             text-copy-secondary dark:text-copy-secondary whitespace-nowrap  ">{category.title}</p>

            </div>
          ))}
        </div>

        <div className=" w-full"> 
          <ClientRoute route={`/post/${post.slug.current}`}>

            <div className="  bg-cta dark:bg-cta  h-[30px] rounded border-white/20 
            dark:hover:bg-cta-active border flex justify-center items-center    
            hover:text-copy-secondary dark:hover:text-copy-secondary
              transition-all duration-100 hover:scale-105 mt-4 ">
              <button className=" font-Louis font-bold text-white/85   flex justify-center items-center gap-2 ">Read More

              </button>

            </div>
          </ClientRoute>
        </div>
      </article>
    ))
    ) : (
      <div className='  flex   ml-4  h-96 justify-center items-center gap-4 p-4 mb-12'>
        <h2 className='text-2xl   text-copy-primary dark:text-copy-primary font-MoonGet 
        uppercase opacity-30  whitespace-nowrap tracking-widest'>No Category Found</h2>
      </div>
  )}

  </div>
  </main>
  )
}

