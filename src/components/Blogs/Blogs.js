import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-col justify-center p-16 gap-y-5'>
            <div className='bg-red-500 text-white p-8 rounded-xl'>
            <h1 className='text-4xl'>Question 1: <strong>What is Context Api</strong> ?</h1>
            <p className='text-xl mt-10'><strong className='text-2xl'>Answer: </strong> Context Api is a React structure that allows to share data without sending props everytime to every desired components. It also assists in solving prop-drilling around the whole project. As it shares the data with the components, we don't have to send props for dynamic change!</p>
        </div>
            <div className='bg-blue-500 text-white p-8 rounded-xl'>
            <h1 className='text-4xl'>Question 2: <strong>Difference Between inline and block Elements</strong> ?</h1>
            <p className='text-xl mt-10'><strong className='text-2xl'>Answer: </strong>Well we know that here <strong>Inline elements</strong> don't take another line or always stay side by side with another element, while <strong>Block elements stay one after another column wisely*</strong> They don't stay side by side like inline elements. To make Block elements look or work like inline elements, we can use <strong>display: inline-block</strong>  to make any block element work as an inline element</p>
        </div>
        </div>
    );
};

export default Blogs;