import React, { useRef } from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'
import { BsInstagram , BsArrowLeftShort,BsArrowRight} from "react-icons/bs";

import './Gallery.css';


const galleryImages=[images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  const scrollRef=useRef(null);

const scroll=(direction) =>{
  const {current}= scrollRef;
  if(direction==='left'){
    current.scrollLeft-=300;
  }else{
    current.scrollLeft+=300
  }
}


  return (

    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:"#AAA", marginTop:"2rem"}}>Hii my name is Dheeraj and this is a photo gallery page thatt i am using in </p>
        <button type="button" className='custom__button'>view More</button>


      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image,index)=>(
          <div className="app__gallery-images_card flex__center" key={`gallery_images${index+1}`}>
            <img src={image} alt="gallery" />
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))}

        </div>
      

        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className='gallery__arrow-icon ' onClick={()=>scroll('left')}/>
          <BsArrowRight className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
        </div>
      </div>
    </div>
  )
};


export default Gallery;
