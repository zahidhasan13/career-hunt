import {
    faCalendar,
    faDollar,
    faEnvelope,
    faMapMarkerAlt,
    faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AppliedJob = () => {
    //get the data from local storage
    const jobData = JSON.parse(localStorage.getItem("jobData"));

    return (
        <div>
            {jobData?.map((job, index) => (
                <>
                    <div key={index} className="bg-[#F4F1FF] p-8 rounded">
                        <h3 className="text-xl font-bold">Job Details</h3>
                        <hr className="my-4" />
                        <p>
                            <span className="text-cyan-600">
                                <FontAwesomeIcon icon={faDollar} />
                            </span>{" "}
                            {job?.salary}
                        </p>
                        <p className="mt-2">
                            <span className="text-cyan-600">
                                <FontAwesomeIcon icon={faCalendar} />
                            </span>{" "}
                            {job?.position}
                        </p>
                        <h3 className="text-xl font-bold mt-4">
                            Contact Information:
                        </h3>
                        <hr className="my-4" />
                        <p>
                            <span className="text-cyan-600">
                                <FontAwesomeIcon icon={faPhoneSquare} />
                            </span>{" "}
                            {job?.phone}
                        </p>
                        <p className="mt-2">
                            <span className="text-cyan-600">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>{" "}
                            {job?.email}
                        </p>
                        <p className="mt-2">
                            <span className="text-cyan-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </span>{" "}
                            {job?.location}
                        </p>
                    </div>
                </>
            ))}
        </div>
    );
};

export default AppliedJob;
