import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

  const [showNavBar,setShowNavBar] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100) {
             setShowNavBar(true)
      }else
        setShowNavBar(false)
    });
  },[])

  return (
    <div className={`${showNavBar ? "black_navbar" : "navbar"}`}>
      <img className="netflix-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
      <img className="avatar-logo" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar Logo"/>
    </div>
  )
}

export default Navbar
