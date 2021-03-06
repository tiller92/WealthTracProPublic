import { useEffect, useState } from "react"
import Logout from '../components/Logout.js'

export default function Menu(){
  const [toggle, setToggle] = useState(false)
  const handleChange = (e)=>{
    setToggle(!toggle)
  }
  if(toggle == true){
    //open
    return(
      <>
      <div className="relative border-box h-auto w-auto top-0 right-0"> 
      
          <nav className="relative top-5 left-5 h-2/5 w-16 "> 
          <div
          onClick={handleChange}
          className="box-content justify-center  p-1 cursor-pointer">
          <div className="w-8 h-1 bg-red-400 m-1.5"></div>
          <div className="w-8 h-1 bg-red-400 m-1.5"></div>
          <div className="w-8 h-1 bg-red-400 m-1.5"></div>
          </div>
          <Logout></Logout>
           </nav>
      </div>
    
      </>
    )
  }
  //close
  return(
    
        <nav className="relative top-5 left-5 h-2/5 w-16 ">
          <div
          onClick={handleChange}
          className="relative box-content justify-center  p-1 cursor-pointer">
          <div className="w-8 h-1 bg-emerald-400 m-1.5"></div>
          <div className="w-8 h-1 bg-emerald-400 m-1.5"></div>
          <div className="w-8 h-1 bg-emerald-400 m-1.5"></div>
          </div>
           </nav>
      
  )
}
