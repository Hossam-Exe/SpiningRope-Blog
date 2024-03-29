"use client"
import React, { useState,useEffect } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  useEffect(() => {
    setTheme(colorTheme);
    
  }, []);

  return (
   
      
        <DarkModeSwitch  className=' mr-6 '    checked={darkSide} onChange={toggleDarkMode} 
        size={24} />
      
    
    
  );
}
