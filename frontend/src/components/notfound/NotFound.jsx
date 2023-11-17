import React from 'react'
import Lottie from 'lottie-react'
import notfound from "../../assets/404.json"
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
function NotFound() {
  const navigate = useNavigate()
  return (
    <div className='empty-center' >
     <Lottie animationData={notfound} style={{ marginTop: '30%', width: 300, height: 300 }} />
      <Button  onClick={(e) => navigate('/')}  icon="pi pi-home" rounded  
        outlined label='Go home' severity="primary"  />
    </div>
  )
}

export default NotFound
