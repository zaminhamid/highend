import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import image from '../../assets/assian.jpg'; 
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={image} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chief's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>zamin Hamid</p>
        <p className="p__opensans">Chief & Founder</p>
        
      </div>
    </div>
  </div>
);

export default Chef;
