import React from 'react'
import styles from './LoginPage.module.css'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signincont}>
        <div className={styles.imagePart}>
        <Image src='/signin.jpg' alt ="" height="400" width="400" className={styles.image}></Image>
      </div>
        <div className={styles.wrapper}>
            <div className={styles.google}> Sign In With Google</div>
            <div className={styles.github}>Sign In with GitHub</div>
            <div className={styles.facebook}>Sign In with Facebook</div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginPage