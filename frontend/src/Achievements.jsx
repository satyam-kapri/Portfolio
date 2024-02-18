import React from 'react'
import './achievements.css'
import sih from './assets/sih.png'
import leetcode from './assets/leetcode.png'
import udemy from './assets/udemy.png'
function Achievements() {
  return (
    <div className='achieve-outer'>
      <div className='achieve-heading'>
      <span>What My Achievements Include?</span>
      <span>These are my achievements during my Btech.</span>
      </div>
      <div className='achieve-rightside'>
      <div><span style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}><img src={sih} style={{width:'40px',height:'40px',borderRadius:'50%'}}></img>Smart India Hackathon 2023 Finalist</span></div>
      <div><span style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}><img src={udemy} style={{width:'40px',height:'40px',borderRadius:'50%'}} ></img>Certified Full Stack Web Developer</span></div>
      <div><span style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}><img src={leetcode} style={{width:'40px',height:'40px',borderRadius:'50%'}}></img>500+ questions on LeetCode <br></br>(1400/21000 Highest Contest Rank<br></br> Till Now)</span></div>
      </div>
    </div>
  )
}

export default Achievements
