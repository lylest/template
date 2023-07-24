import React from 'react'
import Sider from '../../components/sider/Sider'
import Topnav from '../../components/topbar/Topnav'
  
function Home() {

  return (
    <div className='page-container'>
        <Topnav  page="home"/>
        <div className='container'>
          <div className='sider'><Sider /></div>
          <div className='section'>
          </div>
        </div>
    </div>
  )
}

export default Home
