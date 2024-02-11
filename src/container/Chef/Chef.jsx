import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__wrapper app__bg section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"  />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Let See Chief Word"/>
      <h1 className="headtext__cormorant">What we Belive in </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote } alt='quote'></img>
          <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsum!</p>
        </div>
        <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eligendi beatae quis minus magnam aspernatur nostrum consequatur asperiores id eius?</p>
      </div>
      <div className="app__chef-sign">
        <p>Dheeraj</p>
        <p className='p__opensans'>Chief and founder</p>
        <img src={images.sign} alt="sign" />

      </div>
    </div>
  </div>
);

export default Chef;
