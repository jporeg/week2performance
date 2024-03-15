import React from 'react';
import './styles/page1.css';
import picture1 from '../images/picture1.jpg';

const Page1 = () => {
  return (
    <div className="container">
      <h2 className="title">Page 1</h2>
      <img src={picture1} alt="Picture 1" className="image" />
    </div>
  );
}

export default Page1;
