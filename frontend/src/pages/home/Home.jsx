import React from 'react'
import Sider from '../../components/sider/Sider'
import Topnav from '../../components/topbar/Topnav'
import Userbar from '../../components/userbar/Userbar' 

function Home() {

  return (
    <div className="main-wrapper">
      <Topnav />
      <div className="container">
          <div className="sider"><Sider /></div>
          <div className="section">
             <Userbar title="Dashboard"/>
          </div>
    </div>
    </div>
  )
}

export default Home
