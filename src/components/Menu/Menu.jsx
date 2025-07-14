import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Menu= () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1  className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p className={styles.detail}>
              <span className={styles.username}>By John Doe</span>
              <span className={styles.date}> - 1 day ago</span>
            </p>
          </div>
            
        </Link>
                <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p className={styles.detail}>
              <span className={styles.username}>By John Doe</span>
              <span className={styles.date}> - 1 day ago</span>
            </p>
          </div>
            
        </Link>
                <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p className={styles.detail}>
              <span className={styles.username}>By John Doe</span>
              <span className={styles.date}> - 1 day ago</span>
            </p>
          </div>
            
        </Link>
                <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
            <p className={styles.detail}>
              <span className={styles.username}>By John Doe</span>
              <span className={styles.date}> - 1 day ago</span>
            </p>
          </div>
            
        </Link>
       
      </div>

      <div className={styles.categoriesContainer}>  

        <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
         <h1  className={styles.title}>Categories</h1>
         <div className={styles.categories}>
       
          <Link href='/blog' className={`${styles.category} ${styles.style}`}>
            
            Style
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.fashion}`}>
           
            Fashion
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.food}`}>
            
            Food
          </Link>
        <Link href='/blog' className={`${styles.category} ${styles.travel}`}>
            
            Travel
          </Link>
        
        <Link href='/blog' className={`${styles.category} ${styles.culture}`}>
           
            Culture
          </Link>
        <Link href='/blog' className={`${styles.category} ${styles.culture}`}>
            
            Coding
          </Link>
      </div></div>
      
   
      <div className={styles.editotpick}>
        <h2 className={styles.subtitle}>{"Choosen By Editor"}</h2>
         <h1  className={styles.title}>Editor's pick</h1>
         <div className={styles.items}>
           <Link href="/" className={styles.item}>
             <div className={styles.imageContainer}>
             <Image
              src="/p1.jpeg"
              alt="Popular Item 1"
              width={50}
              height={50}
              className={styles.image}
             />
              </div>
              <div className={styles.textContainer}>
               <span className={`${styles.category} ${styles.travel}`}>Travel</span>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
              <p className={styles.detail}>
              <span className={styles.username}>By John Doe</span>
              <span className={styles.date}> - 1 day ago</span>
            </p>
           </div>
            
           </Link>

           <Link href="/" className={styles.item}>
             <div className={styles.imageContainer}>
             <Image
              src="/p1.jpeg"
              alt="Popular Item 1"
              width={50}
              height={50}
              className={styles.image}
             />
              </div>
              <div className={styles.textContainer}>
               <span className={`${styles.category} ${styles.travel}`}>Travel</span>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
              <p className={styles.detail}>
              <span className={styles.username}>By John Doe</span>
              <span className={styles.date}> - 1 day ago</span>
            </p>
           </div>
            
           </Link>

           <Link href="/" className={styles.item}>
             <div className={styles.imageContainer}>
             <Image
              src="/p1.jpeg"
              alt="Popular Item 1"
              width={50}
              height={50}
              className={styles.image}
             />
              </div>
              <div className={styles.textContainer}>
               <span className={`${styles.category} ${styles.travel}`}>Travel</span>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
              <p className={styles.detail}>
              <span className={styles.username}>By John Doe</span>
              <span className={styles.date}> - 1 day ago</span>
            </p>
           </div>
            
           </Link>
       
          </div>

          
      </div>

    </div>
  )
}

export default Menu