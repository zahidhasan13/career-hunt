import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    const idNumber = Number(id);

    //fetch the data
    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    //filter the data
    const job = jobs?.find((job) => job.id === idNumber);

    return (
        <>
            <div>
                <h1>{job?.companyName}</h1>
            </div>
            <div>
                <h1>{job?.salary}</h1>
            </div>
            <div>
                <h1>{job?.address}</h1>
            </div>
        </>
    );
};

export default JobDetails;
