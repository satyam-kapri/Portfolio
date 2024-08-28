
import { lazy, Suspense } from "react"
import Page1 from "./Page1"
const Page2=lazy(()=>import("./Page2.jsx"));
const Footer=lazy(()=>import("./Footer.jsx"));
function App() {
  

  return (
    <>

     <Page1></Page1>
     <Suspense >
     <Page2></Page2>
     </Suspense>
     <Suspense>
     <Footer></Footer>  
     </Suspense>
   
    </>
  )
}

export default App
