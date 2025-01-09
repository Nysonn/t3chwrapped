import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPalette, faRocket } from '@fortawesome/free-solid-svg-icons'
import './Featured.css'

const Featured = () => {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: 'Custom Web Development',
      description: 'Professional websites tailored for musicians and artists, built with modern technologies.'
    },
    {
      icon: <FontAwesomeIcon icon={faPalette} />,
      title: 'Premium Templates',
      description: 'Ready-to-use website templates designed specifically for the music industry.'
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} />,
      title: 'Career Growth',
      description: 'Tools and resources to help you establish and grow your online presence.'
    }
  ]

  return (
    <section className="featured">
      <div className="featured-container">
        <h2>Transform Your Online Presence</h2>
        <div className="featured-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured