import React, { useState } from 'react';
import '../styles/holographicAfricanGadgets.css';

const HolographicAfricanGadgets = () => {
    const gadgets = [
        {
          name: 'VR Headset',
          img: 'https://i.ibb.co/G43903kC/VR-Headset.jpg',
        },
        {
          name: 'Robot Arm',
          img: 'https://i.ibb.co/MvQyhxD/Robot-Arm.jpg',
        },
        {
          name: 'Smart AI Glasses',
          img: 'https://i.ibb.co/kVG98Kgz/Smart-AI-Glasses.jpg',
        },
        {
          name: 'AI Drone',
          img: 'https://i.ibb.co/DfGD1rXr/AI-Drone.jpg',
        },
      ];
      

  const [selected, setSelected] = useState(null);

  return (
    <div className="holographic-container">
      <h2 className="holographic-title">Holographic  Gadgets</h2>
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
