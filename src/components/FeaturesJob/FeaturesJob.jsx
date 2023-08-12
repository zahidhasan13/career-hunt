import React, { useState } from "react";
import Job from "../Job/Job";

const FeaturesJob = ({ jobs }) => {
    const data = 4;
    const [show, setShow] = useState(data);
    const [isLoading, setIsLoading] = useState(false);

    //when click on see more button, load 4 more jobs
    const handleSeeMore = () => {
      setIsLoading(true);
      setTimeout(() => {
        setShow(show + data);
        setIsLoading(false);
      }, 500);
    }

    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-medium text-[#191919]">
                        Features Job
                    </h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Explore the whole collection of open-source web
                        components and elements built with the utility classes
                        from Tailwind
                    </p>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                    {jobs.slice(0, show).map((job) => (
                        <Job key={job.id} job={job}></Job>
                    ))}
                </div>
                {
                  isLoading ? "Loading....." : <>{show < jobs.length && (
                    <div className="text-center">
                        <button
                            className="text-white py-2 px-4 rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500"
                            onClick={handleSeeMore}
                        >
                            See More
                        </button>
                    </div>
                )}</>
                }
            </div>
        </section>
    );
};

export default FeaturesJob;
