// Pagination.jsx
import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1} href="#posts"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button className={styles.button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages} href="#posts"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
