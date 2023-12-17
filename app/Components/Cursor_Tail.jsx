'use client'
import React, { useEffect } from 'react';

const Cursor_Tail = () => {


  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".cursor");

    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
      //circle.style.backgroundColor = "white";
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);


    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 0 + "px";
        circle.style.top = y - 0 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        circle.style.opacity = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
     
    };
  }, []); 

  return (
  
    <div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white ' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none  dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black     cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black     cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black     cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black     cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black     cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black     cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black    cursor  left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2  bg-black     cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    <div  className='cursor fixed rounded-full w-2 h-2   bg-black    cursor left-0 top-0 z-[200] pointer-events-none dark:bg-white' ></div>
    
    </div>
    
    
  ); 
};

export default Cursor_Tail;
