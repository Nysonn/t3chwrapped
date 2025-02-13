import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import classes from './News.module.css';
import NewsImage from '../../../src/assets/images/female-singer.jpg';
import SecondaryButton from '../../components/common/Button/SecondaryButton'

// Array of dummy blog posts
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best DAW for Your Music Style",
    description: "A comprehensive guide to finding the perfect digital audio workstation that matches your workflow and musical genre.",
    image: NewsImage,
    category: "Production",
    link: "/blog/daw-guide",
  },
  {
    id: 2,
    title: "Top 10 Microphones for Studio Recording",
    description: "Discover the microphones that can take your recordings to the next level.",
    image: NewsImage,
    link: "/blog/top-microphones",
  },
  {
    id: 3,
    title: "Best Budget Gear for Indie Artists",
    description: "Affordable tools and equipment to kickstart your music career.",
    image: NewsImage,
    link: "/blog/budget-gear",
  },
  {
    id: 4,
    title: "The Role of AI in Music Production",
    description: "How artificial intelligence is shaping the future of music creation.",
    image: NewsImage,
    link: "/blog/ai-music-production",
  },
  {
    id: 5,
    title: "Building Your Brand as a Musician",
    description: "Learn the strategies for creating a strong and recognizable brand.",
    image: NewsImage,
    link: "/blog/musician-branding",
  },
  {
    id: 6,
    title: "Top Plugins for Music Mixing and Mastering",
    description: "Enhance your mixes with these powerful plugins.",
    image: NewsImage,
    link: "/blog/mixing-plugins",
  },
];

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
