import React, { useRef, useState } from 'react';
import { meal } from '../../constants';
import { BsPauseFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";



import './Intro.css';

const Intro = () => {
  const vidRef=useRef()
  const [playVideo,setVideo]=useState(false)

  const handelVideo=()=>{
    setVideo((prev) => !prev)

    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
  
  return (

  
  <div className='app__video'>
    <video src={meal}
          type="video/mp4"
          ref={vidRef}
          loop
          controls={false}
          muted
    ></video>

    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center"
      onClick={handelVideo}>
         {playVideo ?
        <BsPauseFill color="#fff" fontSize={30} />:
          <BsFillPlayFill color="#fff" fontSize={30}/>
      }
      </div>

     
    </div>
    
  </div>
)};

export default Intro;
