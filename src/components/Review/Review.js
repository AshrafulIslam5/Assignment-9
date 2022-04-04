import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Review = ({ review }) => {
    const { img, name, comment, rating } = review;
    return (
        <div className='flex flex-col justify-center items-center border rounded-lg text-center p-6'>
            <img className='w-full border rounded-xl' src={img} alt="" />
            <div>
                <h2 className='text-3xl my-2'>{name}</h2>
                <p>{comment}</p>
                <p className='flex justify-center'><strong className='mr-1'>Ratings: </strong>{rating} <StarIcon className='w-5 text-yellow-400' /> </p>
            </div>
        </div>
    );
};

export default Review;