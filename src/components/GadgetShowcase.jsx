import React, { useState } from 'react';
import '../styles/gadgetShowcase.css';

const GadgetShowcase = () => {
  const gadgets = [
    {
      name: 'Smartphone',
      img: 'https://images.pexels.com/photos/1447127/pexels-photo-1447127.jpeg',
    },
    {
      name: 'Smart Watch',
      img: 'https://images.pexels.com/photos/1447531/pexels-photo-1447531.jpeg',
    },
    {
      name: 'Laptop',
      img: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg',
    },
    {
      name: 'Camera',
      img: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg',
    },
    {
      name: 'Headphones',
      img: 'https://images.pexels.com/photos/3239382/pexels-photo-3239382.jpeg',
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="gadget-showcase-container">
      <h2 className="showcase-title">Explore Our Latest Gadgets</h2>
      <div className="gadget-gallery">
        {gadgets.map((gadget, index) => (
          <div
            className="gadget-item"
            key={index}
            onMouseEnter={() => setSelected(index)}
            onMouseLeave={() => setSelected(null)}
          >
            <img
              src={gadget.img}
              alt={gadget.name}
              className={`gadget-image ${selected === index ? 'zoom' : ''}`}
            />
            <div className="gadget-name">{gadget.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetShowcase;
