'use client'
import React, { useRef } from 'react';
import Date_Time from "./Date_Time";

import Link from "next/link"
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import Switcher from "./Switcher"




const Navigation = () => {


  const isopenRef = useRef(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (!isopenRef.current) {
      isopenRef.current = true;
      if (dialogRef.current && backdropRef.current) {
        dialogRef.current.style.display = "flex";
        backdropRef.current.style.display = "flex";
      }
    } else {
      isopenRef.current = false;
      if (dialogRef.current && backdropRef.current) {
        dialogRef.current.style.display = "none";
        backdropRef.current.style.display = "none";
      }
    }
  };

  const handleBackdropClick = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dialogRef.current) {
      const dialogDimensions = dialogRef.current.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        if (dialogRef.current && backdropRef.current) {
          dialogRef.current.style.display = "none";
          backdropRef.current.style.display = "none";
          isopenRef.current = false;
        }
      }
    }
  };


  return (
    <>
      
      <nav className="sticky  top-0 w-full h-14   z-20  ">
      
      <div
        id="backdrop"
        ref={backdropRef} onPointerDown={handleBackdropClick}
        className="fixed inset-0  w-full h-screen bg-zinc-950 hidden opacity-30 transition-all"
      >
      </div>
      <div
        className="h-12   bg-background drop-shadow-sm flex justify-center items-center gap-2 p-4  border-border dark:border-border border-b relative"
      >
       
        <div className="flex-1 flex justify-start items-center gap-4 pr-8  ">
          <div
            className="hidden rounded-br-md absolute top-[48px] left-0 flex-col gap-4  bg-background  dark:bg-background  w-72 h-74 p-6  
               border-border dark:border-border border shadow-lg ml-6"
            id="dialog"
            ref={dialogRef}
          >
            <div className="flex gap-4">
              {/* <Image
                src=""
                alt=""
                width={100}
                height={100}
                className="bg-zinc-700 rounded-full border-white/20 border-[3px]"
              /> */}
              <p className="text-[0.8rem] font-bold font-Louis text-copy-primary dark:text-copy-primary">
                Hey! 👋 My name is Hossam . I’m a Game & Web developer who enjoys design work,
                too
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className=" text-base text-copy-primary dark:text-copy-primary tracking-widest font-bold ">Let’s Connect</h1>
              <div className="flex gap-2">
              <svg className=' h-5 w-5 fill-current text-copy-primary dark:text-copy-primary'  viewBox="0 0 50 50" >    
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
                <a className="underline text-[14px] text-copy-primary dark:text-copy-primary"
                 href="https://linkedin.com/in/hossam-hassan-5b1949251">
                  Linkedin</a>
              </div>
              <div className="flex gap-2">
                
              <svg  className=' h-5 w-5 fill-current text-copy-primary dark:text-copy-primary'  viewBox="0 0 64 64" >
               <path d="M37.289 28.973l7.139-7.313L15.401 6.325C14.7 5.955 13.95 5.898 13.27 6.072L37.289 28.973zM11.084 8.284C11.033 8.505 11 8.736 11 8.978v46.044c0 .272.036.531.101.777l22.911-23.469L11.084 8.284zM37.248 35.723L13.355 57.949c.657.147 1.374.081 2.046-.274l28.447-15.029L37.248 35.723zM58.979 29.347l-9.489-5.013-8.638 8.036 8.003 7.631 10.124-5.349C61.111 33.526 61.111 30.474 58.979 29.347z" />
              </svg>
                <a className="underline text-[14px] text-copy-primary dark:text-copy-primary" 
                href="https://play.google.com/store/apps/dev?id=8814278798085878902">
                  Play Store</a>
              </div>
              <div className="flex gap-2">
              <svg  className=' w-5 h-5 fill-current  text-copy-primary dark:text-copy-primary' viewBox="0 0 20 20" >
               <path d="M12.6667 19.3333V17.3333V14.5833C12.6667 13.75 12.5825 13.4125 12.0833 12.9167C14.4092 12.6667 16.6667 11.7783 16.6667 7.88333C16.6634 6.88011 16.2642 5.91874 15.5558 5.20833C15.723 4.77793 15.8032 4.31866 15.7917 3.85707C15.7803 3.39549 15.6774 2.94076 15.4892 2.51917C15.4892 2.51917 14.6142 2.26917 12.5925 3.575C10.8926 3.1319 9.10743 3.1319 7.4075 3.575C5.385 2.26917 4.51083 2.51917 4.51083 2.51917C4.32256 2.94076 4.21972 3.39549 4.20828 3.85707C4.19684 4.31866 4.27701 4.77793 4.44417 5.20833C4.09076 5.56269 3.81074 5.98327 3.62012 6.44601C3.42951 6.90875 3.33205 7.40454 3.33333 7.905C3.33333 11.7717 5.59083 12.6383 7.91667 12.9167C7.42417 13.4075 7.28333 13.9858 7.33333 14.6667V19.3333" />
               <path d="M7.33333 16C3.76167 17.125 3.92833 13.7083 2.5 13.3333M12.6667 19.3333V17.3333V14.5833C12.6667 13.75 12.5825 13.4125 12.0833 12.9167C14.4092 12.6667 16.6667 11.7783 16.6667 7.88333C16.6634 6.88011 16.2642 5.91874 15.5558 5.20833C15.723 4.77793 15.8032 4.31866 15.7917 3.85707C15.7803 3.39549 15.6774 2.94076 15.4892 2.51917C15.4892 2.51917 14.6142 2.26917 12.5925 3.575C10.8926 3.1319 9.10743 3.1319 7.4075 3.575C5.385 2.26917 4.51083 2.51917 4.51083 2.51917C4.32256 2.94076 4.21972 3.39549 4.20828 3.85707C4.19684 4.31866 4.27701 4.77793 4.44417 5.20833C4.09076 5.56269 3.81074 5.98327 3.62012 6.44601C3.42951 6.90875 3.33205 7.40454 3.33333 7.905C3.33333 11.7717 5.59083 12.6383 7.91667 12.9167C7.42417 13.4075 7.28333 13.9858 7.33333 14.6667V19.3333" 
               />
              </svg>

                <a className="underline text-[14px] text-copy-primary dark:text-copy-primary" 
                href="https://github.com/Hossam-Exe">GitHub</a>
              </div>
              <div className="flex gap-2">
              <svg className=' w-5 h-5 fill-current  text-copy-primary dark:text-copy-primary' id="Layer_1"  viewBox="0 0 330.001 330.001" >
               <g id="XMLID_348_">
	             <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		             L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
	              	/>
              	<polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"/>
                </g>
              </svg>

                <a
                  className="underline text-[14px] text-copy-primary dark:text-copy-primary"
                  href="mailto:spiningrope@gmail.com"
                >
                  SpiningRope@gmail.com</a>
              </div>
            </div>
          </div>
          <div
            id="open"
            onPointerDown={handleOpen}
            className="cursor-pointer absolute  z-[5] left-0 top-0 
             bg-copy-primary/30 dark:bg-copy-secondary/30 hover:bg-copy-primary/60  dark:hover:bg-copy-secondary 
              w-20 h-full flex justify-center items-center transition-all"
          >
           <svg viewBox="0 0 287 412"  className='w-6 h-6  fill-current  text-copy-primary dark:text-copy-primary'>
    <g  clip-path="url(#a)">
        <path d="M272.14 0H157.07c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.14 46.29H157.07c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 80H14C6.268 80 0 86.268 0 94s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 126.29H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM207.89 171.57H92.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM207.89 217.86H92.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.89 263.14H157.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM272.89 309.43H157.82c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 337.71H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14zM129.07 384H14c-7.732 0-14 6.268-14 14s6.268 14 14 14h115.07c7.732 0 14-6.268 14-14s-6.268-14-14-14z"/>
    </g>
    <defs>
        <clipPath id="a">
            <path  d="M0 0h286.9v412H0z"/>
        </clipPath>
    </defs>
          </svg>

          </div>
          <ProgressBar />
          
          <div className="ml-24 flex gap-4   z-[5] ">
            
            <Link
              href="/"
              className="text-[0.60rem] tracking-widest   uppercase  text-copy-primary/80
               dark:text-copy-primary/70 hover:text-copy-primary dark:hover:dark:text-copy-primary 
               font-MoonGet transition duration-200 ease-in-out"
            >Home</Link>
            <Link
              href="https://spiningrope.netlify.app/"
              className="text-[0.60rem] tracking-widest uppercase text-copy-primary/80
               dark:text-copy-primary/70 hover:text-copy-primary dark:hover:dark:text-copy-primary
                font-MoonGet transition duration-200 ease-in-out"
            >Portoflio</Link>
          </div>
        </div>
        <Switcher/>
        <div className="flex-1 flex justify-end gap-1 max-md:hidden mr-6  z-[5]">
          <Date_Time />
        </div>
      </div>
      
      </nav>
      
    </>
   

  )


}

export default Navigation