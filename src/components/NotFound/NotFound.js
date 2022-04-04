import React from 'react';
import { EmojiHappyIcon } from '@heroicons/react/outline';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className='w-80' src="../../images/404.gif" alt="" />
            <h1 className='text-xl flex items-center font-semibold'>Opps, Looks like u just got lost, Click any buttons on the header to go to your desired location
                <div className='w-12'>
                <EmojiHappyIcon></EmojiHappyIcon>
            </div>
            </h1>
        </div>
    );
};

export default NotFound;