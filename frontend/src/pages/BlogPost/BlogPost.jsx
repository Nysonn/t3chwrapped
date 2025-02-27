import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import classes from './BlogPost.module.css';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Normalize the slug from the URL to match with the link format in the data
  const formattedSlug = `/blog/${slug}`;
  const post = blogPosts.find(post => post.link === formattedSlug);

  if (!post) {
    return <p className={classes.error}>Article not found!</p>;
  }

  return (
    <div className={classes.newsDetailPage}>
      <div className={classes.container}>
        <header className={classes.header}>
          <h1 className={classes.title}>{post.title}</h1>
        </header>

        <figure className={classes.imageContainer}>
          <img src={post.image} alt={post.title} className={classes.image} />
        </figure>

        <article className={classes.content}>
          <div className={classes.excerpt}>{post.description}</div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
