import{j as e}from"./index-xQR30mtx.js";const a="/Portfolio/assets/resumeimg-uk4vcWF3.png",c="/Portfolio/assets/SatyamKapriGoodResume2-gQpvTY80.pdf";function d(){const n=async()=>{try{const t=await(await fetch(c)).blob();console.log(t);const r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.setAttribute("download","SatyamKapriGoodResume2.pdf"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(s){console.error("Error downloading file:",s)}};return e.jsxs("div",{className:"resumeouter",children:[e.jsx("img",{src:a,className:"resumeimg"}),e.jsxs("div",{className:"resumeheading",children:[e.jsx("span",{children:"What My Resume Looks Like?"}),e.jsx("span",{children:"The pdf file is about 45kb"}),e.jsx("button",{className:"downloadbtn",onClick:n,children:"Download"})]})]})}export{d as default};
