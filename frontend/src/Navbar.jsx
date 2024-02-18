import React from 'react'
import { useState } from 'react'

import './navbar.css'

import logo2 from './assets/Group 19.png'
import emailsvg from './assets/wired-outline-177-envelope-send.gif'
function Navbar() {
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
  window.addEventListener("scroll", changeNavbarColor);
  const style1={
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    height: '116px',
    padding: '1rem 8rem',
    boxSizing:'border-box',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    transition:'0.3s',
    
  }
  const style2={
    position: 'fixed',
    width: '100%',
    background: 'white',
    top: 0,
    left: 0,
    height: '75px',
    padding: '1rem 8rem',
    boxSizing:'border-box',
    zIndex: '200',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    transition:'0.3s',
    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
  }
 
  return (
    <div style={colorChange?style2:style1}>
      <img src={logo2} style={{width:'8rem'}}/>
      {/* <img src={colorsplash} className='colorsplash'/> */}
      <div className='navright'>
      <div className='navitems'>
        <span onClick={()=>{document.getElementById('home').scrollIntoView({block:'start',behavior:'smooth'})}}>Home</span>
        <span onClick={()=>{document.getElementById('projects').scrollIntoView({block:'start',behavior:'smooth'})}}>Projects</span>
        <span onClick={()=>{document.getElementById('about').scrollIntoView({block:'start',behavior:'smooth'})}}>About</span>
      
      </div>
      <button className='contactmebtn' onClick={()=>{document.getElementById('footer').scrollIntoView({block:'start',behavior:'smooth'})}}><div><img src={emailsvg} style={{width:'30px',height:'30px'}}></img></div><span>Contact Me</span></button>
      </div>
    </div>
  )
}

export default Navbar
