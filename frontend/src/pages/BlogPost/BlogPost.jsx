import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaCalendar, FaUser, FaTags, FaArrowLeft, 
  FaBookmark, FaTwitter, FaLinkedin, FaLink 
} from 'react-icons/fa';
import { blogPosts } from '../../data/blogPosts';
import classes from './BlogPost.module.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => 
    post.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const handleShare = (platform) => {
    // Share functionality implementation
    console.log(`Sharing on ${platform}`);
  };

  if (!post) {
    return (
      <div className={classes.errorContainer}>
        <div className={classes.error}>
          <h2>Post not found</h2>
          <button onClick={() => navigate('/news')} className={classes.backButton}>
            <FaArrowLeft /> Return to Articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.pageContainer}>
      <div className={classes.topNav}>
        <button onClick={() => navigate('/news')} className={classes.backLink}>
          <FaArrowLeft /> <span>Articles</span>
        </button>
        <div className={classes.quickShare}>
          <button onClick={() => handleShare('twitter')}><FaTwitter /></button>
          <button onClick={() => handleShare('linkedin')}><FaLinkedin /></button>
          <button onClick={() => handleShare('copy')}><FaLink /></button>
        </div>
      </div>

      <article className={classes.blogPostContainer}>
        <div className={classes.contentGrid}>
          {/* Left Column - Article Content */}
          <div className={classes.mainContent}>
            <div className={classes.articleMeta}>
              <span className={classes.category}>{post.category}</span>
              <span className={classes.readTime}>{post.readTime}</span>
            </div>
            
            <h1 className={classes.title}>{post.title}</h1>
            <p className={classes.description}>{post.description}</p>
            
            <div className={classes.authorBar}>
              <div className={classes.authorInfo}>
                <div className={classes.avatar}>{post.author.charAt(0)}</div>
                <div>
                  <div className={classes.authorName}>{post.author}</div>
                  <div className={classes.postDate}><FaCalendar /> {post.date}</div>
                </div>
              </div>
              <button className={classes.saveButton}>
                <FaBookmark /> Save Article
              </button>
            </div>

            <div className={classes.featuredImage}>
              <img src={post.image} alt={post.title} />
            </div>

            <div className={classes.articleContent}>
              {post.content}
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <aside className={classes.sidebar}>
            <div className={classes.stickyContent}>
              <div className={classes.tableOfContents}>
                <h3>Table of Contents</h3>
                {/* Add TOC items */}
              </div>
              
              <div className={classes.tagCloud}>
                <h3>Topics</h3>
                <div className={classes.tags}>
                  {post.tags.map((tag, index) => (
                    <span key={index} className={classes.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={classes.authorCard}>
                <div className={classes.authorCardHeader}>
                  <div className={classes.largeAvatar}>{post.author.charAt(0)}</div>
                  <h3>About the Author</h3>
                </div>
                <p>Music technology expert and industry consultant with over 10 years of experience.</p>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
