import React, { useEffect, useState } from 'react'
import whatsapp from './assets/whatsapp.png'
import tictac from './assets/tictactoe.png'
import aidetect from './assets/aidetect.png'
import email from './assets/emailservice.png'
import chat from './assets/chatapp.png'
import './projects.css'
import upicon from './assets/Animation - 1707759888658.gif'

function Projects() {
  const [open,setopen]=useState(null);
  const [active,setactive]=useState(2);
  useEffect(()=>{
    setopen(null);
  },[active]);
  const projectsarr=
  [{idx:1,name:'WhatsAppX',img:whatsapp,live:'https://whatsappx.onrender.com/',url:'https://github.com/satyam-kapri/WhatsAppX',desc:`WhatsAppX utilizes the MERN (MongoDB, Express.js, React.js, Node.js) stack, Socket.IO, and Firebase to deliver a seamless and feature-rich messaging experience.Whatsapp features include:creating groups,inviting to groups,group admin for removing members,uploading profile picture,replying to a message,blue tick for seen message,search in messages etc.`},
  {idx:2,name:'Tic Tac Toe Bot',img:tictac,live:'https://satyam-kapri.github.io/tic-tac-toe-/',url:'https://github.com/satyam-kapri/tic-tac-toe-',desc:'Tic Tac Toe with Minimax AI is an engaging and challenging take on the classic Tic Tac Toe game, where players can test their skills against an intelligent AI opponent. Built using React.js and employing the Minimax algorithm, this project offers a dynamic and interactive gaming experience.'},
  {idx:3,name:'AI Text Detection',img:aidetect,live:'',url:'https://github.com/satyam-kapri/AIGeneratedTextDetector',desc:'The AI-generated text detection project is an innovative solution designed to identify and classify AI-generated text content with high accuracy. Leveraging ensemble learning techniques, specifically voting with SGD (Stochastic Gradient Descent) classifier and Logistic Regression models, this project ensures robust and reliable detection of AI-generated text across various platforms and contexts.'},
  {idx:4,name:'Auto Mail',img:email,live:'',url:'https://github.com/satyam-kapri/AutoMail',desc:'AutoMail is a comprehensive email service website developed using Django, a high-level Python web framework. It offers a range of features, including email scheduling, personalized email sending using CSV files, and AI-generated email content, providing users with a powerful and versatile platform for managing their email communications.'},
  {idx:5,name:'Chat App',img:chat,live:'',url:'',desc:'This is a concept chat app built using html, css, javascript.'}]
  const style1={
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: '2rem 2rem',
    boxSizing: 'border-box',
    background: 'linear-gradient(20deg, #050505, transparent,transparent)'
  }
  const style2={
    background: 'linear-gradient(to top, #050505, #00000059)'
  }
  return (
    <div id='projects' className='projectsouter'>
     
      <div className='projectsheading'>
        <span>See My Works Which Will Amaze You!</span>
        <span style={{width:'78vw'}}>We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.</span>
      </div>
      <div className='projectsallcards'>
      { projectsarr.map((card)=>{
           return (
            <div key={card.idx} className="card" onClick={()=>{setactive(card.idx);}} style={active===card.idx?{flex:'2'}:{}}><img src={card.img}></img><div className='card-gradient' onClick={()=>{if(active===card.idx)if(open===card.idx)setopen(null);else setopen(card.idx)}} style={active===card.idx?(open===card.idx?style2:style1):{}}><div><div><span style={active!==card.idx?{transform:'rotateZ(-90deg)'}:{}}>{card.name}</span>{open===null&&<img className='upicon' src={upicon}></img>}</div>{open===card.idx &&(<><div>{card.desc}</div><div className='btnandlink'><a href={card.live}><button className='playbtn' disabled={card.live===""}>Show Live</button></a><a href={card.url} className='projectlink'>GitHub Link</a></div></>)}</div></div></div>
           );
        })

      }
      </div>
    </div>
  )
}

export default Projects
