import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';

export const useBlogPost = (id) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchPost = () => {
      setLoading(true);
      try {
        const foundPost = blogPosts.find(post => post.id === parseInt(id));
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return { post, loading, error };
}; 