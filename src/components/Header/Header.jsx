import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Job Hunter</h1>
            <nav>
                <a>Statistics</a>
                <a>Applied Jobs</a>
                <a>Blog</a>
            </nav>
            <button className='primary-btn'>Start Applying</button>
        </div>
    );
};

export default Header;