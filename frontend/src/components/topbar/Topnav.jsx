import React,{ useState } from 'react'
import './topbar.css'
import { FiMenu } from 'react-icons/fi'
import logo from '../../assets/logo.png'
import { useNavigate, Link } from 'react-router-dom'
import Sider from '../sider/Sider'
import { Sidebar } from 'primereact/sidebar'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

function Topnav() {
  const navigate = useNavigate()
  const [ isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="topbar-container">
        <div className="logo-wrapper" onClick={() => navigate('/')}>
        <div className='logo-rounded'>
         <img src={ logo } alt="site-logo" />
         </div>
          <div className='brand'>
               <h2>AndMore</h2>
               <p>DRY CLEANER</p>
        </div>
        </div>
        <div className='far-container'>
             <div className='user-circle' id='touchable' onClick={() => toggleDrawer()}>
                 <FiMenu color='#fff' size={20} />            
             </div>
  
        </div>
         <Sidebar  visible={isOpen} onHide={() => setIsOpen(false)}>
              <Sider />
         </Sidebar>
    </div>
  )
}

export default Topnav