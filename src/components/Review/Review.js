import React from 'react';

const Review = ({ review }) => {
    const { id, img, name, comment, rating } = review;
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='w-48' src={img} alt="" />
            <div>
                <h2 className='text-center text-3xl'>{ name }</h2>
            </div>
        </div>
    );
};

export default Review;