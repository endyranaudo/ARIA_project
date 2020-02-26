import React from 'react';
import './SecondArticle.css';

const SecondArticle = () => {
  return (
    <div className="wrapper-second" role="article">
      <img
        src="https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2019/01/09154001/DWA_2019_bulbs-889x500.jpg"
        alt="bulbs illustration"
      />
      <div id="article">
          <h2>
            <a href="#">Our second article</a>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            corrupti suscipit distinctio ea eius sed qui eaque quod nisi. Esse.
          </p>
          <div className="btn-div">
            <button role="button" aria-label="Read more about our second article">Read more</button>
          </div>
      </div>
    </div>
  );
};

export default SecondArticle;
