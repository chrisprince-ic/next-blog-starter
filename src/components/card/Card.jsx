// Card.jsx
import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.imageContainer}>
        <Image src={post.image} alt='Post Image' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{post.date} /</span>
          <span className={styles.category}> {post.category}</span>
        </div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postContent}>{post.content}</p>
        <Link href={post.id} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
