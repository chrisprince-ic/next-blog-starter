// CardList.jsx
'use client'
import React, { useState } from 'react'
import styles from './CardList.module.css'
import Pagination from '../Pagination/Pagination'
import Card from '../card/Card'
import posts from '../../data' // Adjust the path to your data.js file

const POSTS_PER_PAGE = 4

const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)

    // Scroll back to top of posts container smoothly
    const postsContainer = document.querySelector(`.${styles.posts}`)
    if (postsContainer) {
      postsContainer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {currentPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default CardList
