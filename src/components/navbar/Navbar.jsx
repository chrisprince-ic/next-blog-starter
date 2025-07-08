import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
       <div className={styles.social}>
        <Image src ="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src ="/tiktok.png" alt="Twitter" width={24} height={24} />
        <Image src ="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src ="/youtube.png" alt="LinkedIn" width={24} height={24} />
       </div>
       <div className={styles.logo}>
        Chris<span>blog</span>
       </div>
       <div className={styles.links}>
        <ThemeToggle/>
        <div className={styles.link}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>    
        <Link href="/">Contact</Link>
        </div>
        <AuthLinks />
       </div>
    </div>
  )
}

export default Navbar