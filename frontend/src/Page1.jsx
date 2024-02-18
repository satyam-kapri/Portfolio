import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import mainpic from './assets/mainpic.png'
import mainpic2 from './assets/mainpic2.png'
import dividerimg from './assets/yellow dividers.png'
// import pencil from './assets/yellow pencil with eraser.png'
import resumeimg from './assets/looking through resumes.png'
import skillsimg from './assets/Screwdriver and wrench as settings.png'
import trophyimg from './assets/Gold trophy in air.png'
import hobbieimg from './assets/color palette and brush.png'
import Scale from './Scale'
import Resume from './Resume'
import downbtn from './assets/system-solid-12-arrow-down.gif'
import Skills from './Skills'
import paintbursh from './assets/Group 20.png'
import pencil from './assets/pencil.png'
import Achievements from './Achievements'
import Hobbies from './Hobbies'
function Page1() {
    const [open,setopen]=useState(null);
    
  return (
    <>
     <div id="home" className='page'>
      <div className='page-content'>
      <Navbar></Navbar>
      
      <div className='center-frame'>
         {open===null&&<div className='circle'>
          <div onClick={()=>{setopen("resume");}}><img src={resumeimg}></img><span>Resume</span></div>
          <div onClick={()=>{setopen("skills");}}><img src={skillsimg}></img><span>Skills</span></div>
          <div onClick={()=>{setopen("achievements");}}><img src={trophyimg}></img><span>Achievements</span></div>
          <div onClick={()=>{setopen("hobbies");}}><img src={hobbieimg}></img><span>Hobbies</span></div>
         </div>}
        <div style={{position:'absolute', bottom: '-5px'}}><span className='satyamheading'>SAT&nbsp;YAM</span></div>
        <div className='center-pic-outer'>
        {/* <div className='bgplane'><img src={daytonight} alt="" /></div> */}
        {/* <Clock></Clock> */}
        <div className='center-pic'>
         <div><img src={mainpic} style={{width:'340px'}}></img></div>
         <div className='half-image'><img src={mainpic2}></img></div>
      </div>
      </div>
     

      </div>
      <div className='bottom-outer'>
      <div className='moreinfo' style={open!==null ?{height:'550px',transform: 'translateY(-450px)'}:{}}>
        <Scale></Scale>
        {open==="resume"&&<Resume></Resume>}
        {open==="skills"&&<Skills></Skills>}
        {open==="achievements"&&<Achievements></Achievements>}
        {open==="hobbies"&&<Hobbies></Hobbies>}
      </div>
      <div className='bottom-heading'>
        {open!==null && <img src={downbtn} style={{width:'50px',height:'50px',cursor:'pointer'}} onClick={()=>{setopen(null)}}></img>}
        {open===null&&<span>I Design And Build Creative Products</span>}
      </div>
      </div>
      <img src={paintbursh} className="paintbursh"alt="" />
      <img src={pencil} className="pencil"alt="" />
      </div>
     </div> 
    
    </>
  )
}

export default Page1
