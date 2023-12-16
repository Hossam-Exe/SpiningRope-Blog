"use client"
import { useEffect,useRef } from "react"

export default function ProgressBar() {

const bar=useRef<HTMLDivElement>(null)


useEffect(()=>{

    const myFunction = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
      
        if (bar.current) {
            bar.current.style.width = scrolled + '%';
          }
      };
  
      window.addEventListener('scroll', myFunction);
  
      
      return () => {
        window.removeEventListener('scroll', myFunction);
      };


},[])

  return (
    <div className="  w-full    h-full   fixed  top-0  pointer-events-none left-0  ">
        <div ref={bar}  className="   bg-copy-primary/10 dark:bg-copy-secondary/30 z-[-2]  w-0  rounded-md  transition-all duration-500  h-full"></div>
    </div>
  )
}
