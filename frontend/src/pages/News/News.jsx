import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import classes from './News.module.css';
import SecondaryButton from '../../components/common/Button/SecondaryButton'
import { blogPosts } from '../../data/blogPosts'

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      return !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <main className={classes.newsContainer}>
      <header className={classes.newsHeader}>
        <h1 className={classes.mainTitle}>Music Tech Insights</h1>
        <p className={classes.subtitle}>Stay updated with the latest trends, tutorials, and industry insights</p>
      </header>

      <section className={classes.newsContent}>
        {/* Search Bar */}
        <div className={classes.searchSection}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={classes.searchInput}
          />
        </div>

        {/* Posts Grid */}
        <div className={classes.postGrid}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.id} className={classes.postCard}>
                <div className={classes.postImageWrapper}>
                  <img src={post.image} alt={post.title} />
                  {post.category && (
                    <div className={classes.postCategory}>{post.category}</div>
                  )}
                </div>
                <div className={classes.postContent}>
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  <Link to={post.link}>
                    <SecondaryButton>Read More</SecondaryButton>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className={classes.noResults}>
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <section className={classes.newsletter}>
          <div className={classes.newsletterContent}>
            <h3>Stay in the Loop</h3>
            <p>Subscribe to our newsletter for weekly updates and exclusive content</p>
            <form className={classes.newsletterForm}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}
