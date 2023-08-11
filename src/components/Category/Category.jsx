import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Category = ({category}) => {
    const {jobTitle, jobAvailable} = category;
    return (
        <div className='bg-[#FAF9FF] rounded p-8 mb-6 lg:w-72'>
            <div className='bg-[#eae7fa] w-12 h-12 rounded text-3xl text-[#A087FF] flex justify-center items-center mb-4'>
                <FontAwesomeIcon icon={faLaptop}/>
            </div>
            <div>
                <h3 className='text-2xl font-medium'>{jobTitle}</h3>
                <p className='text-gray-400'>{jobAvailable}+ Jobs Available</p>
            </div>
        </div>
    );
};

export default Category;