import "./News.css";
import NewsImage from "../../../src/assets/images/female-singer.jpg";

// Array of dummy blog posts
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best DAW for Your Music Style",
    description: "A comprehensive guide to finding the perfect digital audio workstation.",
    image: NewsImage,
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
  return (
    <main className="news-container">
      <header className="news-header">
        <h1>Trending Insights</h1>
        <p>Insights, tutorials, and reviews at the crossroads of music and technology.</p>
      </header>

      <section className="news-content">
        {/* Featured Post */}
        <article className="featured-post">
          <img
            src={NewsImage}
            alt="Featured blog post"
            className="featured-image"
          />
          <div className="post-content">
            <h2>Transform Your Music Career with the Right Tech Tools</h2>
            <p>
              Explore how innovative tools and technologies are shaping the
              future of the music industry. Discover tips, tricks, and solutions
              for musicians and creators.
            </p>
            <a href="/blog/transform-music-career" className="cta-link">
              Read More
            </a>
          </div>
        </article>

        {/* Blog Categories */}
        <div className="categories">
          <h3>Explore Categories</h3>
          <div className="category-list">
            <a href="/blog/tutorials" className="category-card">Tutorials</a>
            <a href="/blog/reviews" className="category-card">Reviews</a>
            <a href="/blog/insights" className="category-card">Insights</a>
          </div>
        </div>

        {/* Recent Posts */}
        <section className="recent-posts">
          <h3>Recent Articles</h3>
          <div className="post-grid">
            {blogPosts.map((post) => (
              <article className="post-card" key={post.id}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="post-image"
                />
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <a href={post.link} className="read-more">
                  Read More
                </a>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
