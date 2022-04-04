import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h1 className='text-center text-5xl mt-16 text-fuchsia-600'>The Reviews by the Users!</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-20 mt-16'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;