import React, { useState } from 'react';
import classes from './Tools.module.css';
import SamplePackImage from '../../../src/assets/images/sample-pack.jpg';

const Tools = () => {
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

  return (
    <div className={classes.toolsContainer}>
      <div className={classes.heroSection}>
        <h1 className={classes.title}>Essentials for Music Creation</h1>
        <p className={classes.subtitle}>Professional tools for modern music producers</p>
      </div>

      <div className={classes.categoriesGrid}>
        {categories.map((category) => (
          <div key={category.name} className={classes.categorySection}>
            <div className={classes.categoryHeader}>
              <h2 className={classes.categoryTitle}>{category.name}</h2>
              <div className={classes.categoryDivider}></div>
            </div>
            
            <div className={classes.itemsGrid}>
              {category.items &&
                category.items.map((item) => (
                  <div key={item.name} className={classes.itemCard}>
                    <div className={classes.imageWrapper}>
                      <img src={item.image} alt={item.name} className={classes.itemImage} />
                    </div>
                    <div className={classes.itemContent}>
                      <h3 className={classes.itemName}>{item.name}</h3>
                      <p className={classes.itemPrice}>{item.price}</p>
                      <div className={classes.buttonGroup}>
                        <button className={classes.buyButton}>Buy Now</button>
                        <button className={classes.cartButton}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;