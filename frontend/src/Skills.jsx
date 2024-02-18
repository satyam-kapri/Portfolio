import React, { useEffect } from 'react'
import './skills.css'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import reactimg from './assets/react.png'
import nodejs from './assets/nodejs.png'
import mongodb from './assets/mongodb.png'
import django from './assets/django.png'
import sql from './assets/sql.png'
import ml from './assets/ml.png'
import ccpp from './assets/ccpp.png'
import java from './assets/java.png'
import python from './assets/python.png'
function Skills() {
 
  return (
    <div className='skillsouter'>
      <div className='skillsheading'>
        <span>What My Skills inlcude?</span>
        <span>I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</span>
      </div>
      <div className='skillsrightside'>
        <div><img src={html} width={'60px'}></img></div>
        <div><img src={css} width={'44px'}></img></div>
        <div><img src={js} width={'60px'}></img></div>
        <div><img src={reactimg} width={'60px'}></img></div>
        <div><img src={nodejs} width={'60px'}></img></div>
        <div><img src={mongodb} width={'60px'}></img></div>
        <div><img src={django} width={'60px'}></img></div> 
        <div><img src={sql} width={'60px'}></img></div> 
        <div><img src={ml} width={'60px'}></img></div> 
        <div><img src={ccpp} width={'60px'} style={{borderRadius:'50%'}}></img></div> 
        <div><img src={java} width={'60px'}></img></div> 
        <div><img src={python} width={'60px'}></img></div> 
      </div>
    </div>
  )
}

export default Skills
