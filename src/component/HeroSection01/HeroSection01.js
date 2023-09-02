import React from 'react'
import "./Herosection.css"

const HeroSection01 = () => {
  return (
    <div className='main' id='section1'>
        <div className='left01'>
            <h1 className='heading01'>WEB<br/>DEVELOPER</h1>
            <div className='web1'>
                <img alt='Developerimg' src='/Images/web1.jpg'/>
            </div>
        </div>
        <div className='right01'>
            <h1> MERN STACK <br/>DEVELOPER</h1>

            <p>I have been a professional web developer. I have created a large scale of web application and Love to do creative things.</p>
        </div>
    </div>
  )
}

export default HeroSection01