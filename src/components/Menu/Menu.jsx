import React from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import posts from '../../data'

const Menu = () => {
  // Limit to 4 most recent posts for Most Popular
  const mostPopularPosts = posts.slice(0, 4);

  // Get unique categories for Categories section (limited to 6)
  const categories = [...new Set(posts.map(post => post.category))].slice(0, 6);

  // Limit to 3 posts for Editor's Pick
  const editorPickPosts = posts.slice(0, 3);

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {mostPopularPosts.map(post => (
          <Link key={post.id} href={post.id} className={styles.item}>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[post.category.toLowerCase()]}`}>
                {post.category}
              </span>
              <h3>{post.title}</h3>
              <p className={styles.detail}>
                <span className={styles.username}>By {post.author}</span>
                <span className={styles.date}> - {post.date}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.categoriesContainer}>
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.categories}>
          {categories.map(category => (
            <Link
              key={category}
              href={`/blog?category=${category.toLowerCase()}`}
              className={`${styles.category} ${styles[category.toLowerCase()]}`}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.editorpick}>
        <h2 className={styles.subtitle}>Chosen By Editor</h2>
        <h1 className={styles.title}>Editor's Pick</h1>
        <div className={styles.items}>
          {editorPickPosts.map(post => (
            <Link key={post.id} href={post.id} className={styles.item}>
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={50}
                  height={50}
                  className={styles.image}
                />
              </div>
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles[post.category.toLowerCase()]}`}>
                  {post.category}
                </span>
                <h3>{post.title}</h3>
                <p className={styles.detail}>
                  <span className={styles.username}>By {post.author}</span>
                  <span className={styles.date}> - {post.date}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;