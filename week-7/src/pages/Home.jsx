import React from 'react'
import Profile from '../components/Profile'
import BackgroundChanger from '../components/BackgroundChanger'
import ParaGenerator from '../components/ParaGenerator'
import LoginOtp from '../components/LoginOtp'
import OTPLoginForm from '../components/OtpLoginForm'

const Home = () => {
  return (
    <div>
        {/* <Profile/> */}
        {/* <BackgroundChanger/> */}
        {/* <ParaGenerator/> */}
          <LoginOtp />
          <OTPLoginForm/>
        
    </div>
  )
}

export default Home