import Image from 'next/image'
import React from 'react'
import styles from './comments.module.css'
const commentSection = () => {
  const status ="authenticated"; // This is a placeholder. Replace with actual authentication logic.
  return (
    <div>
          <h1>Comment</h1>
          <div className={styles.commenttext}>
            <input type="message" placeholder='Write a comment...' className={styles.commentInput} />
            <button className={styles.commentButton}>Send</button>  
          </div>
          {status === "authenticated" ? (
                      <div className={styles.comments}>
            <div className={styles.comment}>
              <div className={styles.user}>
                <Image src="/p1.jpeg" alt= "Post Image" height="50" width="50" className={styles.image} />
                <div className={styles.userTextContainer}>
                  <span>John Doe</span>
                  <span>Posted 1 day ago</span>
                </div>  
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.</p>
            </div>
          </div>
          ) : (
            <p className={styles.loginPrompt}>Please log in to comment.</p>
          )}

    </div>
  )
}

export default commentSection