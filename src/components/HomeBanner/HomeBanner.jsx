import React from 'react';
import './HomeBanner.css';
import person from'../../assets/All Images/P3OLGJ1 copy 1.png'

const HomeBanner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>

                <h1>One Step<br/>Closer To Your<br/><span className='coloured-text'>Dream Job</span></h1>

                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='primary-btn'>Get Started</button>
            </div>  
            <div className='banner-img'>
                <img src={person} alt="" />
            </div>         
        </div>
    );
};

export default HomeBanner;