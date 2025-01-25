import React, { useState } from 'react';
import classes from './Tools.module.css';
import SamplePackImage from '../../../src/assets/images/sample-pack.jpg';

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('DAWs');

  const categories = [
    {
      name: 'DAWs',
      items: [
        { name: 'Ableton Live', price: '$450', image: SamplePackImage },
        { name: 'Logic Pro', price: '$199', image: SamplePackImage },
        { name: 'FL Studio', price: '$299', image: SamplePackImage },
      ],
    },
    {
      name: 'Sample Packs',
      items: [
        { name: 'Cinematic Sounds', price: '$49', image: SamplePackImage },
        { name: 'Trap Essentials', price: '$39', image: SamplePackImage },
        { name: 'Lo-Fi Chill', price: '$29', image: SamplePackImage },
      ],
    },
    {
      name: 'VST Plugins',
      items: [
        { name: 'Serum', price: '$189', image: SamplePackImage },
        { name: 'Massive X', price: '$149', image: SamplePackImage },
        { name: 'Omnisphere', price: '$499', image: SamplePackImage },
      ],
    },
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const activeItems = categories.find(
    (category) => category.name === activeCategory
  ).items;

  return (
    <div className={classes.toolsContainer}>
      <h1 className={classes.title}>Tools for Artists and Musicians</h1>

      <div className={classes.categoryMenu}>
        {categories.map((category) => (
          <button
            key={category.name}
            className={`${classes.categoryButton} ${
              activeCategory === category.name ? classes.active : ''
            }`}
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={classes.itemsGrid}>
        {activeItems.map((item) => (
          <div key={item.name} className={classes.itemCard}>
            <img src={item.image} alt={item.name} className={classes.itemImage} />
            <h2 className={classes.itemName}>{item.name}</h2>
            <p className={classes.itemPrice}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
