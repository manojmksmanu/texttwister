import React, { useEffect, useState } from 'react'
import '../styling/styling.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {NavLink,Outlet} from 'react-router-dom'

const Navbar = ({title}) => {
  const [theme,setTheme]=useState('light-theme')
function toggle(){
  if(theme ==="dark-theme"){
    setTheme('light-theme')
  }
  else{
    setTheme('dark-theme')
  }
  

};

useEffect(()=>{
  document.body.className=theme;
},[theme])
  return (
    <div>
       <nav className='navbar'>
  <h1>{title}</h1>
  <div className='sub-pages'>
       <NavLink className='links'  to="/"> <h4>Home </h4></NavLink>
     <NavLink  className='links' to="/about">  <h4>About</h4></NavLink> 
      <FormGroup className='switch'>
      <FormControlLabel onClick={toggle} control={<Switch defaultUnChecked='false' />}  />
     
    </FormGroup></div>

    
 </nav>
 <Outlet/>
    </div>
  )
}

export default Navbar
