import {
  faCalendar,
  faDollar,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);

  //fetch the data
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  //filter the data
  const job = jobs?.find((job) => job.id === id);

  return (
    <div>
      <div>
        <h2 className="text-3xl bg-[#F9F9FF] font-medium text-center py-24">
          Job Details
        </h2>
      </div>
      <div className="mx-auto max-w-screen-xl py-20 flex justify-between">
        <div className="space-y-4">
          <p className="text-lg text-gray-500">
            <span className="text-gray-950 font-bold">Job Description: </span>
            {job?.jobDescription}
          </p>
          <p className="text-lg text-gray-500">
            <span className="text-gray-950 font-bold">Job Responsiblity: </span>
            {job?.jobResponsibility}
          </p>
          <p className="text-gray-950 font-bold">Educational Requirments:</p>
          <p className="text-lg text-gray-500">{job?.educationRequirements}</p>
          <p className="text-gray-950 font-bold">Experiences:</p>
          <p className="text-lg text-gray-500">{job?.experience}</p>
        </div>
        <div>
          <div className="bg-[#F4F1FF] p-8 rounded">
          <h3 className="text-xl font-bold">Job Details</h3>
          <hr className="my-4" />
          <p>
            <span className="text-cyan-600">
              <FontAwesomeIcon icon={faDollar} />
            </span>{" "}
            <span className="font-bold">Salary: </span>
            <span className="text-gray-500">{job?.salary}(per month)</span>
          </p>
          <p className="mt-2">
            <span className="text-cyan-600">
              <FontAwesomeIcon icon={faCalendar} />
            </span>{" "}
            <span className="font-bold">Job Title: </span>
            <span className="text-gray-500">{job?.position}</span>
          </p>
          <h3 className="text-xl font-bold mt-4">Contact Information:</h3>
          <hr className="my-4" />
          <p>
            <span className="text-cyan-600">
              <FontAwesomeIcon icon={faPhone} />
            </span>{" "}
            <span className="font-bold">Phone: </span>
            <span className="text-gray-500">{job?.phone}</span>
          </p>
          <p className="mt-2">
            <span className="text-cyan-600">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
            <span className="font-bold">E-mail: </span>
            <span className="text-gray-500">{job?.email}</span>
          </p>
          <p className="mt-2">
            <span className="text-cyan-600">
              <FontAwesomeIcon icon={faLocation} />
            </span>{" "}
            <span className="font-bold">Address: </span>
            <span className="text-gray-500">{job?.address}</span>
          </p>
          </div>
          <button className="text-white py-2 px-4 rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 mt-6 w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
