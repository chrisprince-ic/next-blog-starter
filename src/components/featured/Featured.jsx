import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Christian here!</b>
          Discover my stories and creative ideas</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src='/p1.jpeg' alt='fill' fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Cumque molestias, sapiente, magni delectus amet soluta dicta nobis,
             quae ratione veniam iusto expedita suscipit ducimus.
             Dolorem harum eius vel consectetur libero.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
    
  )
}

export default Featured