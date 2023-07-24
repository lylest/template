import React from 'react'
import MenuItem from '../menuitem/MenuItem'
import './sider.css'
import { menulist } from './menulist'
import logo from '../../assets/logo.png'
 
function Sider() {
 const roleId = 2
  return (
    <div className="sider-wrapper">
  
  { roleId === 2 ?
    <>
       {
        menulist.user.menu.map((item, index) => (
          <MenuItem  title={item.name} key={item.path} path_name={item.path} Icon={item.icon}/>
        ))
      }
    </> : 
    roleId === 1 ? 
    <>
           {
        menulist.admin.menu.map((item, index) => (
          <MenuItem  title={item.name} key={item.path} path_name={item.path} Icon={item.icon}/>
        ))
      } 
    </> : null

   }
    </div>
  )
}

export default Sider
