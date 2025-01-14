import './Testimonials.css';
import TestimonialImage from '../../../assets/images/test-lady.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This team transformed our online presence! Our website is not only visually stunning but also performs exceptionally well.",
      author: "John Doe",
      position: "Musician & Producer",
      image: TestimonialImage, 
    },
    {
      quote:
        "Their SEO strategies skyrocketed our traffic. We’re now ranking on the first page for our targeted keywords!",
      author: "Jane Smith",
      position: "Digital Marketer",
      image: TestimonialImage, 
    },
    {
      quote:
        "Outstanding service! Their digital marketing campaigns brought us more clients than we ever imagined.",
      author: "Mike Johnson",
      position: "Entrepreneur",
      image: TestimonialImage, 
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        <p className="testimonials-subtitle">
          Hear from the creatives and businesses we’ve helped grow.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={`${testimonial.author}`}
                className="testimonial-image"
              />
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <span className="author-name">{testimonial.author}</span>
                <span className="author-position">{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
