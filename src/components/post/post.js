import React from 'react'

import './post.scss'

const Post = ({ title, author, content, createdAt }) =>
  <section className='post'>
    <header className='post-header'>
      <div className='post-info'>
        <div className='post-title'>
          {title}
        </div>
        <div className='post-author'>
          {author}
        </div>
      </div>
      <div className='post-date'>
        {createdAt}
      </div>
    </header>
    <main className='post-content'>
      {content}
    </main>
  </section>

export default Post