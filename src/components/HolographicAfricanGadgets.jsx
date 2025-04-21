import React, { useState } from 'react';
import '../styles/holographicAfricanGadgets.css';

const HolographicAfricanGadgets = () => {
  const gadgets = [
    {
      name: 'Quantum Mask',
      img: 'https://images.pexels.com/photos/1548147/pexels-photo-1548147.jpeg',
    },
    {
      name: 'Nano Glove',
      img: 'https://images.pexels.com/photos/1070949/pexels-photo-1070949.jpeg',
    },
    {
      name: 'HyperLens Glasses',
      img: 'https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg',
    },
    {
      name: 'Bio-Helmet',
      img: 'https://images.pexels.com/photos/4173652/pexels-photo-4173652.jpeg',
    },
    {
      name: 'Solar Energy Pods',
      img: 'https://images.pexels.com/photos/3575730/pexels-photo-3575730.jpeg',
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="holographic-container">
      <h2 className="holographic-title">Holographic African Gadgets</h2>
      <div className="gadget-gallery">
        {gadgets.map((gadget, index) => (
          <div
            className="gadget-item"
            key={index}
            onMouseEnter={() => setSelected(index)}
            onMouseLeave={() => setSelected(null)}
          >
            <div className={`gadget-info ${selected === index ? 'show' : ''}`}>
              <h3 className="gadget-name">{gadget.name}</h3>
              <p className="gadget-description">
                Experience the cutting-edge of African technology.
              </p>
            </div>
            <img
              src={gadget.img}
              alt={gadget.name}
              className={`gadget-image ${selected === index ? 'glow' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolographicAfricanGadgets;
