import React from 'react'
import styles from './blog.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'

const page = () => {
  return (
    <div>
        <h1 className={styles.title}>Style</h1>
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default page