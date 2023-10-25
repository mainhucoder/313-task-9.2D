import React from 'react';
import './articleauthor.css'; 
const articleauthor = ({ line1, line2, line3, author }) => {
  return (
    <div className="article-content-container">
      <div className="contentinfo">{line1}</div>
      <div className="contentinfo">{line2}</div>
      <div className="contentinfo">{line3}</div>
      <div className="author-info">
        <img src="/star.jpg" alt="Star" className="star-img" />
        <span className="starinfo">4</span>
        {author}
      </div>
    </div>
  );
};

export default articleauthor;