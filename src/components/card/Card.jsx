import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = () => {
  return (
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Image src={'/p1.jpeg'} alt='Post Image' fill  className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>1 day ago /

                </span>
                <span className={styles.category}> Category</span>
            </div>
            <h2 className={styles.postTitle}>Post Title 1</h2>
            <p className={styles.postContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reprehenderit unde rem nostrum fugiat ipsam quod inventore, deserunt aspernatur fugit,
                 debitis a aliquam sequi reiciendis! Excepturi ratione earum repudiandae facere minus.</p>
            <Link href='/blog/post1' className={styles.readMore}>
              Read More</Link>
          </div>
          
        </div>
  )
}

export default Card