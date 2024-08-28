import React, { useEffect, useState } from 'react'
import './about.css'
import myphoto2 from './assets/Profile picture (1).png'
import needle from './assets/1000_F_516985222_rwPURXYIEWQirdzuDtUwdHXB7bGHvRfc-removebg-preview.png'
import music from './assets/texttovoice.mp3'
// import song from './assets/Heeriye_64-(PagalWorld).mp3'
function About() {
  const [audio]=useState(new Audio(music));
  useEffect(()=>{
    audio.addEventListener("ended",()=>{
      document.getElementById('track-img').getAnimations().forEach(animation => animation.pause());
      document.querySelector('.track-needle').style.transform="rotate(0deg) translate(7px, 3px)";
    })
    return()=>{
      audio.addEventListener("ended",()=>{
        document.getElementById('track-img').getAnimations().forEach(animation => animation.pause());
      })
    }
  },[])
  function playmusic(){
    if(audio.paused)
    {document.querySelector('.track-needle').style.transform="rotate(20deg) translate(7px, 3px)";
    document.getElementById('track-img').getAnimations().forEach(animation => animation.play());
    
      audio.play();
  } 
    else
    {  document.querySelector('.track-needle').style.transform="rotate(0deg) translate(7px, 3px)";
    document.getElementById('track-img').getAnimations().forEach(animation => animation.pause());
      audio.pause();
   
  } 
  }
  return (
    <div id='about' className='aboutouter'>
      <div className='gramophone'>
      
      <div className='track'>
        <div className='shadow'></div>
      <img src={myphoto2} id='track-img'></img>
      </div>
      <img src={needle} className='track-needle'></img>
      <div className='musicplaybtn' onClick={playmusic}><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 20 20"><path fill="black" d="M15.987 3.016a1 1 0 0 0-1.285-.79l-7 2.187A1 1 0 0 0 7 5.368V13.5a2.5 2.5 0 1 0 1 2V8.368l7-2.188v2.843c.343.03.678.093 1 .184V3.18c0-.056-.005-.11-.013-.164M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.263-.435l-2.994-1.65a.5.5 0 0 0-.742.437v3.3a.5.5 0 0 0 .742.438l2.994-1.65a.5.5 0 0 0 0-.875"/></svg></div>
      </div>
      
      <div className='aboutcontent'>
      <div className='aboutme'>ABOUT ME</div>
      <div className='aboutheading'>
         Who am I ?
      </div>
      <div>
      Welcome to my portfolio! I'm a BTech student passionate about problem-solving, web development, machine learning, and UI/UX design. With a focus on creativity, collaboration, and adaptability, I thrive on tackling challenges head-on. Explore my projects to see how I blend technical expertise with a keen eye for intuitive user experiences.I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. 
      </div>
      <button className='hireme' onClick={()=>{document.getElementById('footer').scrollIntoView({block:'start',behavior:'smooth'})}}>Hire Me</button>
      </div>
    </div>
  )
}

export default About
