import React from 'react';
import Hero from '../Hero/Hero';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedJobCategory = useLoaderData();
    return (
        <div className=''>
            <Hero></Hero>
            <JobCategory loadedJobCategory={loadedJobCategory}></JobCategory>
        </div>
    );
};

export default Home;