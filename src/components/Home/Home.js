import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReviews();
    return (
        <div>
            
            <div className='flex justify-between items-center px-10 md:px-32 mt-8'>
                <div>
                    <h1 className='text-blue-300 text-2xl md:text-7xl md:text-red-400 my-9'>Play Has no Limits</h1>
                    <p className='text-sm md:text-xl'>Take a Look at this Brand new Ps5. This is rocking the market of Gamers by the price of <strong>$499.99</strong></p>
                    <button className='text-xl px-4 py-1 rounded-sm my-11 border border-blue-400 hover:bg-red-300 active:bg-blue-400'><a rel='noreferrer' target="_blank" href="https://www.facebook.com/matha.nosto.359/">Contact Me</a></button>
                    <footer>*Facebook*</footer>
                </div>
                <div>
                    <img className='w-full' src="../../images/ps5.png" alt="" />
                </div>
            </div>

            <div>
                <h1 className='text-center text-5xl mt-16'>Customer Reviews!</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-20 mt-14'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/reviews'><button className=' text-xl px-4 py-1 rounded-sm my-11 border border-blue-400 hover:bg-red-300 active:bg-blue-400'>See more</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Home;