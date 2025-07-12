import React from 'react'
import styles from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1>Popular categories</h1>
      <div className={styles.categories}>
       
          <Link href='/blog' className={`${styles.category} ${styles.style}`}>
            <Image className={styles.image} src='/style.png' alt='Style' width={32} height={32} />
            Style
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.fashion}`}>
            <Image className={styles.image} src='/fashion.png' alt='Style' width={32} height={32} />
            Fashion
          </Link>
          <Link href='/blog' className={`${styles.category} ${styles.food}`}>
            <Image className={styles.image} src='/food.png' alt='Style' width={32} height={32} />
            Food
          </Link>
        <Link href='/blog' className={`${styles.category} ${styles.travel}`}>
            <Image className={styles.image} src='/travel.png' alt='Style' width={32} height={32} />
            Travel
          </Link>
        
        <Link href='/blog' className={`${styles.category} ${styles.culture}`}>
            <Image className={styles.image} src='/culture.png' alt='Style' width={32} height={32} />
            Culture
          </Link>
        <Link href='/blog' className={`${styles.category} ${styles.culture}`}>
            <Image className={styles.image} src='/coding.png' alt='Style' width={32} height={32} />
            Coding
          </Link>
      </div>
    </div>
  )
}

export default CategoryList