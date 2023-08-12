import { faAddressCard, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {companyName, address, logoImage, position, salary, workType, id} = job;
    return (
        <div className='border-2 border-gray-200 rounded p-6 mb-4'>
            <img src={logoImage} alt="" className='w-[200px]'/>
            <div className='my-4'>
                <h3 className='text-2xl font-medium'>{position}</h3>
                <p className='text-xl'>{companyName}</p>
                <div className='my-2'>
                    {
                        workType.map(wt => <button key={id} className='mr-2 border-2 border-[#A087FF] text-[#A087FF] hover:bg-[#A087FF] hover:text-white px-4 font-medium'>{wt}</button>)
                    }
                </div>
                <div className='flex justify-between'>
                    <p><FontAwesomeIcon icon={faAddressCard}/><span className='ml-1'>{address}</span></p>
                    <p><FontAwesomeIcon icon={faDollarSign}/><span className='ml-1'>{salary}</span></p>
                </div>
            </div>
            <button className="text-white py-2 px-4 rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">View Details</button>
        </div>
    );
};

export default Job;