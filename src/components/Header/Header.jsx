import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>Job Hunter</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied-jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <div className='btn-home'>
            <button className='primary-btn'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;