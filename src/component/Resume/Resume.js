import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className='mainrs'>
      <div className='leftrs'>
        <h1>DOWNLOAD RESUME FROM HERE...</h1>
        <a href='https://github.com/Kanishkweb/' className='resume-button github-button'>GitHub</a>
        <a href='https://drive.google.com/u/0/uc?id=1r_XhZfXb3eLRVeEV-z17NEADrrGzU7Xn&export=download' className='resume-button download-button'>DOWNLOAD NOW</a>
      </div>
      <div className='rightrs'>
        <div className='resume-image'>
          <img alt='resume' src='Images/cv.png' />
        </div>
      </div>
    </div>
  );
};

export default Resume;
