import React from 'react';
import hero from '../../assets/P3OLGJ1 copy 1.png';

const Hero = () => {
    return (
        <section className="bg-[#F9F9FF]">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-[#1A1919]">One Step closer To Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 '>Dream Job</span></h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <button className="text-white py-2 px-4 rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">Get Started</button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="mockup"/>
        </div>                
    </div>
</section>
    );
};

export default Hero;