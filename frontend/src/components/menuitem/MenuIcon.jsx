import React from 'react'
import './menuicon.css' 

function MenuIcon({ title, Icon, rightTitle, color }) {
  return (
    <div className='menu-icon-bar'>
      <div className="menu-with-icon"> <Icon color={color} size={20} /></div>
      <h4>{ title }</h4>
      <div className="menu-with-icon-far"><p>{ rightTitle }</p></div>
    </div>
  )
}

export default MenuIcon
