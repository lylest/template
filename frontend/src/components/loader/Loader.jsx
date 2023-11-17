import React from 'react'
import './loader.css'
import Lottie from 'lottie-react'
import AnimatedLoader from '../../assets/AnimatedLoader.json'


function Loader() {
  return (
    <div className='empty-center' >
     <Lottie animationData={AnimatedLoader} style={{ marginTop: '50%', width: 80, height: 80 }} />
    </div>
  )
}

export default Loader