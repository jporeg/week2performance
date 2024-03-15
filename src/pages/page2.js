import React from 'react';
import './styles/page2.css';
import picture2 from '../images/picture2.jpg';

const Page2 = () => {
  return (
    <div className="container">
      <h2 className="title">Page 2</h2>
      <img src={picture2} alt="Picture 2" className="image" />
    </div>
  );
}

export default Page2;
