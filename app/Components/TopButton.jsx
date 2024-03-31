'use client'


import React, {useState,useEffect} from 'react'; 


const TopButton = () => {

    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 2000){ 
        setVisible(true) 
      }  
      else if (scrolled <= 2000){ 
        setVisible(false) 
      } 
    }; 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
   
    window.addEventListener('scroll', toggleVisible); 

    return () => {
        window.removeEventListener('scroll', toggleVisible); 
    };
  }); 

  return (
    <button className=" z-20 fixed bottom-4  right-20 max-sm:right-6 mx-2 bg-cta dark:bg-copy-primary/80 
    text-copy-secondary dark:text-copy-secondary  rounded p-1 " onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
      </svg>

    </button>
  );
};

export default TopButton;
