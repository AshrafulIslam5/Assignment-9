import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center text-2xl mt-7'>
            <Link to='/home'>
                <button className='mr-8 hover:text-blue-500'>Home</button>
            </Link>
            <Link to='/reviews'>
                <button className='mr-8 hover:text-blue-500'>Reviews</button>
            </Link>
            <Link to='/dashboard'>
                <button className='mr-8 hover:text-blue-500'>Dasboard</button>
            </Link>
            <Link to='/blogs'>
                <button className='mr-8 hover:text-blue-500'>Blog</button>
            </Link>
            <Link to='/about'>
                <button className='hover:text-blue-500'>About</button>
            </Link>
        </div>
    );
};

export default Header;