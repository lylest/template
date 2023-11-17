import './sider.css'
import React from 'react'
import Divider from './Divider'
import MenuItem from '../menuitem/MenuItem'
import logo from '../../assets/logo.png'
import Empty from '../../components/empty/Empty'
import { BsShop  } from 'react-icons/bs'
import { Button } from 'primereact/button'
import { useMenuList } from './menulist'
import { useSiderHook } from './useSiderHook'
import { Sidebar } from 'primereact/sidebar'
import { Dialog } from 'primereact/dialog'
import { Avatar } from 'primereact/avatar'
import { ScrollPanel } from 'primereact/scrollpanel'
import { useGlobalContextHook } from '../../hook/useGlobalContextHook'
    
function Sider() {
  const { menulist } = useMenuList()
  const { currentUser, dispatch, isEnglish, activeShop } = useGlobalContextHook()
  const { visible, setVisible } = useSiderHook()
  const  roleId  =  2
  const  baseUrl = import.meta.env.VITE_API_URL

  return (
    <div className="sider-wrapper">
      <ScrollPanel style={{ width: '100%', height: '97vh' }}>
      <div className="logo-wrapper">
       <div className="logo-rounded"> <img src={logo} alt="logo" loading="lazy" /></div>
        <div className='brand'>
        <h2>Template</h2>
        <p>SHOP SYSTEM</p>
        </div>
      </div>
  
  { roleId === 2 ?
    <>
      {
        menulist.manager.menu.map((item, index) => (
          item.name === "space" ? <Divider /> :
          <MenuItem  title={item.name} key={index} path_name={item.path} Icon={item.icon}/>
        ))
      }
    </> : 
    roleId === 1 ? 
    <>
      {
        menulist.admin.menu.map((item, index) => (
          item.name === "space" ? <Divider /> :
          <MenuItem  title={item.name} key={index} path_name={item.path} Icon={item.icon}/>
        ))
      } 
    </> : 
    roleId === 3 ? 
       <>
        {
         menulist.staff.menu.map((item, index) => (
        item.name === "space" ? <Divider /> :
        <MenuItem  title={item.name} key={index} path_name={item.path} Icon={item.icon}/>
      ))
    }
  </> : null}
</ScrollPanel>
  </div>
  )
}

export default Sider
