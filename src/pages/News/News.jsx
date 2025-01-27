import React from 'react';
import classes from './News.module.css';
import NewsImage from '../../../src/assets/images/female-singer.jpg';
import { FaCalendar, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';

// Array of dummy blog posts
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best DAW for Your Music Style",
    description: "A comprehensive guide to finding the perfect digital audio workstation that matches your workflow and musical genre.",
    image: NewsImage,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Production",
    readTime: "8 min read",
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

const categories = [
  { name: "Tutorials", count: 15 },
  { name: "Reviews", count: 12 },
  { name: "Insights", count: 8 },
  { name: "Production", count: 10 },
  { name: "Industry News", count: 6 },
];

export default function News() {
  return (
    <main className={classes.newsContainer}>
      <header className={classes.newsHeader}>
        <h1 className={classes.mainTitle}>Music Tech Insights</h1>
        <p className={classes.subtitle}>Stay updated with the latest trends, tutorials, and industry insights</p>
      </header>

      <section className={classes.newsContent}>
        {/* Featured Post */}
        <article className={classes.featuredPost}>
          <div className={classes.featuredImageWrapper}>
            <img src={NewsImage} alt="Featured blog post" className={classes.featuredImage} />
            <div className={classes.featuredCategory}>Featured</div>
          </div>
          <div className={classes.featuredContent}>
            <div className={classes.postMeta}>
              <span><FaCalendar /> March 20, 2024</span>
              <span><FaUser /> John Doe</span>
              <span><FaTags /> Production</span>
            </div>
            <h2>Transform Your Music Career with the Right Tech Tools</h2>
            <p>
              Explore how innovative tools and technologies are shaping the
              future of the music industry. Discover tips, tricks, and solutions
              for musicians and creators.
            </p>
            <a href="/blog/transform-music-career" className={classes.readMore}>
              Read Article <FaArrowRight />
            </a>
          </div>
        </article>

        {/* Category Filter */}
        <div className={classes.categorySection}>
          <h3>Browse by Category</h3>
          <div className={classes.categoryList}>
            {categories.map((category) => (
              <button key={category.name} className={classes.categoryButton}>
                {category.name}
                <span className={classes.categoryCount}>{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Posts Grid */}
        <section className={classes.recentPosts}>
          <h3>Latest Articles</h3>
          <div className={classes.postGrid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={classes.postCard}>
                <div className={classes.postImageWrapper}>
                  <img src={post.image} alt={post.title} />
                  <div className={classes.postCategory}>{post.category}</div>
                </div>
                <div className={classes.postContent}>
                  <div className={classes.postMeta}>
                    <span><FaCalendar /> {post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className={classes.cardReadMore}>
                      Read More <FaArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

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
