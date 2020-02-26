import React from 'react';
import './MainArticle.css';

const MainArticle = () => {
  return (
    <div className="wrapper-main" role="article">
      <img
        src="https://storage.googleapis.com/spec-host/mio-staging%2Fmio-design%2F1581631970573%2Fassets%2F1kVVLIES2HDnnmqXgAvglbAK8a-oVEEh0%2Fintro-illo-motion.png"
        alt="Abstract illustration"
        aria-label="Abstract illustration"
      />
      <div id="top-article">
          <h2>
            <a href="#">The importance of accessibility</a>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt      
            corrupti suscipit distinctio ea eius sed qui eaque quod nisi. Esse.
          </p>
          <div className="btn-div">
            
          <button aria-label="Read more about the importance of accessibility">Read more</button>
          </div>
      </div>
    </div>
  );
};

export default MainArticle;
