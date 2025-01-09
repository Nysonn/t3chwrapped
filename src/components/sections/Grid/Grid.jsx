import './Grid.css'

const Grid = ({ items }) => {
  return (
    <section className="grid-section">
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <div className="grid-item-icon">{item.icon}</div>
            <h3 className="grid-item-title">{item.title}</h3>
            <p className="grid-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Grid 