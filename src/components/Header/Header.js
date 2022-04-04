import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt1Icon, MenuIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className={`text-center text-2xl mt-7 sm:block flex flex-col md:flex-row scroll-smooth ${open ? 'block' : 'hidden'}`}>
                <Link to='/home'>
                    <button className='md:mr-8 hover:text-blue-500'>Home</button>
                </Link>
                <Link to='/reviews'>
                    <button className='md:mr-8 hover:text-blue-500'>Reviews</button>
                </Link>
                <Link to='/dashboard'>
                    <button className='md:mr-8 hover:text-blue-500'>Dasboard</button>
                </Link>
                <Link to='/blogs'>
                    <button className='md:mr-8 hover:text-blue-500'>Blog</button>
                </Link>
                <Link to='/about'>
                    <button className='hover:text-blue-500'>About</button>
                </Link>
            </div>
            <h1 className='hidden md:block text-center text-fuchsia-700 mt-6 text-4xl border-t-2 border-fuchsia-200 border-b-2'>Product: Ps5</h1>
            
            <div onClick={() => setOpen(!open)} className='flex justify-center text-fuchsia-700 mt-6 text-4xl border-t-2 border-fuchsia-200 border-b-2 md:hidden'>
            {open ?<MenuAlt1Icon className='w-12'/> :<MenuIcon className='w-12' />}
            </div>
        </div>
    );
};

export default Header;