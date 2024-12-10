import { lazy, Suspense, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import mainpic2 from './assets/mainpic2.png'
import resumeimg from './assets/looking through resumes.png';
import skillsimg from './assets/Screwdriver and wrench as settings.png';
import trophyimg from  './assets/Gold trophy in air.png';
import hobbieimg from './assets/color palette and brush.png';
import Scale from './Scale'
const Resume=lazy(()=>import('./Resume')) 
import downbtn from './assets/system-solid-12-arrow-down.gif'
import Skills from './Skills'
const paintbursh=lazy(()=>import('./assets/Group 20.png'));
import pencil from './assets/pencil.png'
const Achievements=lazy(()=>import('./Achievements'));
const Hobbies=lazy(()=>import('./Hobbies'))
import mainpic3 from './assets/mainpic3.png'
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
         <div className='main-image'><img src={mainpic3}></img></div>
         <div className='half-image'><img src={mainpic2}></img></div>
      </div>
      </div>
     

      </div>
      <div className='bottom-outer'>
      <div className='moreinfo' style={open!==null ?{height:'550px',transform: 'translateY(-450px)'}:{}}>
        <Scale></Scale>
        {open==="resume"&&<Suspense><Resume></Resume></Suspense>}
        {open==="skills"&&<Suspense><Skills></Skills></Suspense>}
        {open==="achievements"&&<Suspense><Achievements></Achievements></Suspense>}
        {open==="hobbies"&&<Suspense><Hobbies></Hobbies></Suspense>}
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
