import React from 'react'
import resumeimg from './assets/resumeimg.png'
import './resume.css'
import pdf from './assets/satyam_new_resume.pdf'
function Resume() {
  
  const downloadFile = async () => {
    try {
      const response = await fetch(pdf);
      const blob = await response.blob();
      console.log(blob);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'satyam_new_resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  
  return (
    <div className='resumeouter'>
      
      <img src={resumeimg} className='resumeimg'></img>
      <div className='resumeheading'>
      <span>What My Resume Looks Like?</span>
      <span>The pdf file is about 45kb</span>
     <button className='downloadbtn' onClick={downloadFile}>Download</button>
      </div>
    </div>
  )
}

export default Resume;
