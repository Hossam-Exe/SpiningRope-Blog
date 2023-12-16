

import Image from 'next/image'
import { urlFor } from "@/lib/getClient";
import ClientRoute from "./ClientRoute";




type Props = {
  posts: Post[];
}

const Hero = ({posts}:Props) => {

  return (
    <div>
      <div  className="  relative   rounded-md h-[15rem]  w-full ">
      

      <div className='felx   justify-between items-center    ' >
          
         
          <div className=' absolute  left-0 bottom-2 px-4      rounded-lg '>
          <h1 className=" text-copy-primary dark:text-copy-primary   line-clamp-2  text-[3.5rem] font-MoonGet tracking-wider 
            font-bold">
         Decoding
            <br></br> Excellence </h1>
          <p className=" text-copy-primary/80 dark:text-copy-primary/50 font-bold    font-Louis overflow-clip w-[70%]  mt-2 line-clamp-2">
          Unraveling the Code: Where Creativity Meets Command Lines.  
          </p>
          </div>
        
          <Image
          className="   rounded-xl  max-sm:hidden   absolute right-[5%]    bottom-[-15px]  w-[35%] "
          src={"/icon/hero.png"}
          alt={"Post Image"}
          width={1000}
          height={1000}
          
          />  
            
       

         </div>
        
        
       </div>
       <div className='   py-4  w-full flex justify-start items-center gap-4'>
        <hr className=' border-border dark:border-border  h-[1px] w-[35rem]' />
        <p className=' font-Louis  text-copy-primary dark:text-copy-primary  text-xl font-bold'>Articles</p>
        <hr className='border-border dark:border-border  h-[1px] w-[35rem] ' />
       </div>
       
    </div>
  
  )
}

export default Hero