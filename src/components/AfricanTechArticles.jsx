import React from 'react';
import '../styles/africanTechArticles.css';

const articles = [
  {
    title: 'Quantum Mask: The Future of Defense',
    description: 'A mask that can alter your appearance with advanced holographic technology.',
    img: 'https://images.pexels.com/photos/1548147/pexels-photo-1548147.jpeg',
  },
  {
    title: 'Solar-Powered Energy Pods',
    description: 'Harness the power of the African sun with these portable, efficient energy pods.',
    img: 'https://images.pexels.com/photos/1070949/pexels-photo-1070949.jpeg',
  },
  {
    title: 'The HyperLens Glasses',
    description: 'Wearable glasses that augment reality and provide real-time information.',
    img: 'https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg',
  },
  {
    title: 'Nano Gloves: Revolutionizing Interaction',
    description: 'A new way to interact with technology using your hands and gestures.',
    img: 'https://images.pexels.com/photos/4173652/pexels-photo-4173652.jpeg',
  },
  {
    title: 'AI-Driven Bio-Helmet',
    description: 'A helmet that reads your brainwaves to control your virtual environment.',
    img: 'https://images.pexels.com/photos/3575730/pexels-photo-3575730.jpeg',
  },
];

const AfricanTechArticles = () => {
  return (
    <div className="tech-article-container">
      <h2 className="tech-article-title">Futuristic African Tech Articles</h2>
      <div className="article-gallery">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <div className="article-img-container">
              <img src={article.img} alt={article.title} className="article-img" />
              <div className="article-overlay">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </div>
            <div className="article-description">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AfricanTechArticles;
