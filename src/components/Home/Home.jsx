import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturesJob from "../FeaturesJob/FeaturesJob";
import Hero from "../Hero/Hero";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const loadedJobCategory = useLoaderData();

    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <div className="">
            <Hero></Hero>
            <JobCategory loadedJobCategory={loadedJobCategory}></JobCategory>
            <FeaturesJob jobs={jobs} setJobs={setJobs}></FeaturesJob>
        </div>
    );
};

export default Home;
