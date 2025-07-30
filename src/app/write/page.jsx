'use client'
import React, { useState, useEffect } from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(''); // this holds the HTML content

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Write your story...</p>',
    onUpdate: ({ editor }) => {
      setValue(editor.getHTML()); // update on change
    },
  });

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.titleInput} />
      
      <div className={styles.editor}>
        <div className={styles.toolbar}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="Add" width={16} height={16} />
          </button>

          {open && (
            <div className={styles.add}>
              <button className={styles.addbutton}>
                <Image src="/image.png" alt="Add Image" width={16} height={16} />
              </button>
              <button className={styles.addbutton}>
                <Image src="/external.png" alt="Add Link" width={16} height={16} />
              </button>
              <button className={styles.addbutton}>
                <Image src="/video.png" alt="Add Video" width={16} height={16} />
              </button>
            </div>
          )}
        </div>

        <EditorContent editor={editor} className={styles.tiptap} />
      </div>

      {/* Display value for testing */}
      <div className={styles.preview}>
        <h4>Preview HTML Content:</h4>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
};

export default WritePage;
