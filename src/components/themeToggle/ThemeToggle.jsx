"use client";
import Image from 'next/image'
import React, { useContext } from 'react'
import styles from './ThemeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const {toggle,theme} = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container} onClick ={toggle} style={theme ==="dark"? 
        {background:"black"}:
        {background:"white"}}>
      <Image src="/moon.png" alt="Moon Icon" width={14} height={14} />
      <div className={styles.ball} style={
       theme === "dark"
      ? { left: "2px", background: "white" }
      : { left: "calc(100% - 17px)", background: "black" }
       }></div>

      <Image src="/sun.png" alt="Sun Icon" width={14} height={14} />
      
    </div>
  )
}

export default ThemeToggle