import React from 'react';
import './Radio.css';

const Radio = () => {
  
  return (
    <div className="radio-box">
      <form action="">
        <div
          className="input-box"
          role="radiogroup"
          aria-labelledby="contacts"
          id="rg1"
        >
          <div className="block">
            <label for="email" aria-label="email">
              email
            </label>
            <div
              role="radio"
              aria-checked="false"
              tabindex="0"
              id="email"
              name="email"
              value="email"
            ></div>
          </div>
          <div className="block">
            <label for="phone">phone</label>
            <div
              role="radio"
              aria-checked="false"
              tabindex="-1"
              id="phone"
              name="phone"
              value="phone"
            ></div>
          </div>
          <div className="block">
            <label for="pigeon">pigeon</label>
            <div
              role="radio"
              aria-checked="false"
              tabindex="-1"
              id="pigeon"
              name="pigeon"
              value="pigeon"
            ></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Radio;
