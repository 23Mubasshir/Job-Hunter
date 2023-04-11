import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const JobDetailsId = useParams();
  console.log(JobDetailsId);

  useEffect(() => {
    fetch("../../../public/FeaturedJobs.json")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.find(job => job.id == JobDetailsId.jobId
          );
        console.log(data);
        console.log(jobData);
      });
  }, []);

  return (
    <div>
      <div className="Job-details-banner">
        <h1>Job Details</h1>
      </div>
      <div className="full-job-details">
        <div className="Job-details-text"></div>

        <div className="Job-details-cart"></div>
      </div>
    </div>
  );
};

export default JobDetails;
