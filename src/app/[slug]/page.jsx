import React from 'react';
import styles from './postPage.module.css';
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import CommentSection from '@/components/comments/commentSection';
import posts from '../../data'; // Importing posts from data.js
import { notFound } from 'next/navigation';

const PostPage = ({ params }) => {
  // Find the post by slug (assuming slug is the post id)
  const post = posts.find(post => post.id === params.slug);

  // If no post is found, trigger Next.js notFound
  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>{post.title}</h1>
          <div className={styles.user}>
            <Image
              src={post.image}
              alt={post.title}
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userTextContainer}>
              <span>{post.author}</span>
              <span>Posted {post.date}</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={post.image}
            alt={post.title}
            height={300}
            width={350}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <p>{post.content}</p>
          <p>{post.content}</p>
          <CommentSection />
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default PostPage;