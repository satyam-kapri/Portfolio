import React from 'react'
import './hobbies.css'
function Hobbies() {
  return (
    <div className='hobbiesouter'>
      <div className='hobbiesheading'>
         <span>What Are My Hobbies?</span>
         <span>
          BasketBall, Badminton, Chess are some of my favourite sports.I enjoy playing Guitar, playing BGMI, watching web series in my spare time.
          Music and Coding go hand-in-hand. Design gives me a satisfaction.
         </span>
      </div>
      <div className='hobbiesrightside'>
       <div><span>Guitar</span></div>
       <div><span>BasketBall</span></div>
       <div><span>Badminton</span></div>
       <div><span>Chess</span></div>
       <div><span>Design</span></div>
       <div><span>BGMI</span></div>
       <div><span>Web Series</span></div>
       <div><span>Coding</span></div>
       <div><span>Music</span></div>
      </div>
    </div>
  )
}

export default Hobbies
