import React from 'react';
import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{marginBottom:'rem'}}>
    <div className="p__cormorant">{title}</div>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
