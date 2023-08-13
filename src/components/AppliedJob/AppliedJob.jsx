import {
    faAddressCard,
    faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = () => {
    //get the data from local storage
    const jobData = JSON.parse(localStorage.getItem("jobData"));

    return (
        <div>
            <div>
                <h2 className="text-3xl bg-[#F9F9FF] font-medium text-center py-24 mb-20">
                    Applied Jobs
                </h2>
            </div>
            {jobData?.map((job, index) => (
                <div key={index} className="border-2 border-gray-200 rounded p-4 mb-4 flex items-center max-w-screen-xl mx-auto">
                <div className="w-28 h-28 lg:w-40 lg:h-40 rounded bg-gray-200 flex justify-center items-center">
                <img src={job.logoImage} alt="" className="w-[70px] lg:w-[100px]" />
                </div>
                <div className="my-4 ml-4 flex-grow">
                    <h3 className="text-xl lg:text-2xl  font-medium">{job.position}</h3>
                    <p className="text-xl">{job.companyName}</p>
                    <div className="my-2">
                        {job.workType.map((wt,idx) => (
                            <button
                                key={idx}
                                className="mr-2 border-2 border-[#A087FF] text-[#A087FF] hover:bg-[#A087FF] hover:text-white px-4 font-medium mb-2"
                            >
                                {wt}
                            </button>
                        ))}
                    </div>
                    <div className="flex">
                        <p className="mr-4 text-gray-500">
                            <FontAwesomeIcon icon={faAddressCard} />
                            <span className="ml-1">{job.address}</span>
                        </p>
                        <p className="text-gray-500">
                            <FontAwesomeIcon icon={faDollarSign} />
                            <span className="ml-1">{job.salary}</span>
                        </p>
                    </div>
                <Link to={`/${job.id}`}>
                    <button className="block lg:hidden text-white py-2 px-4 rounded mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        View Details
                    </button>
                </Link>
                </div>
                <Link to={`/${job.id}`}>
                    <button className="hidden lg:block text-white py-2 px-4 rounded mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500">
                        View Details
                    </button>
                </Link>
            </div>
            ))}
        </div>
    );
};

export default AppliedJob;
