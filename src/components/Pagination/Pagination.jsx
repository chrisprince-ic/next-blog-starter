import React from 'react'
import styles from './Pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <span className={styles.pageInfo}>Page 1 of 10</span>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pagination