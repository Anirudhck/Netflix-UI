import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
  const[show,setShow] = useState(false)
  useEffect(() => {
   window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
      setShow(true)
    }
    else{
      setShow(false)
    }
   })
  }, [])
  
  return (
    <div className={`Nav ${show && "Nav_black"}`}>
        <img 
         className='Nav_logo'
         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
         alt='nav_logo'/>
        <img 
         className='Nav_avatar'
         src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"    
         alt='nav_avatar'/>
         
    </div>
  )
}

export default Nav