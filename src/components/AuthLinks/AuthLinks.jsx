"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import styles from './AuthLinks.module.css';

const AuthLinks = () => {
  const status = "notauthenticated";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {status === "authenticated" ? (
          <Link href='/login'>Login</Link>
        ) : (
          <>
            <Link href='/Profile'>Write</Link>
            <Link href='/Logout'>Logout</Link>
          </>
        )}
      </div>

      <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        <CiMenuFries/>
      </div>

      {isOpen && (
        <div className={styles.menu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
