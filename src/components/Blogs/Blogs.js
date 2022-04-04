import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-col justify-center p-16 gap-y-5'>
            <div className='bg-red-500 text-white p-8 rounded-xl'>

                <h1 className='text-4xl'>
                    Question 1: <strong>What is Context Api</strong> ?
                </h1>

                <p className='text-xl mt-10'>
                    <strong className='text-2xl'>Answer: </strong> Context Api is a React structure that allows to share data without sending props everytime to every desired components. It also assists in solving prop-drilling around the whole project. As it shares the data with the components, we don't have to send props for dynamic change!
                </p>
            </div>

            <div className='bg-blue-500 text-white p-8 rounded-xl'>

                <h1 className='text-4xl'>Question 2: <strong>Semaintic Tags</strong></h1>

                <p className='text-xl mt-10'>
                    <strong className='text-2xl'>Answer: </strong>Semantic tags are those tags that define the tag totally by their name. Actually, Tags that take a section or a defined part in the page like <strong>Header, nav, main, article, footer.....</strong> are semantic tags. Semantic tags really creates the structure of the page one by one.
                </p>
            </div>
        </div>
    );
};

export default Blogs;