import React from "react";

const FeaturedJobCarts = ({job}) => {
  console.log({job});
  const {
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = job;
  return (
    <div className="job-column">
      <img src={company_logo} alt="" />
      <h3>{job_title}</h3>
      <p>{company_name}</p>
      <div>
        <p>{remote_or_onsite}</p>
        <p>{fulltime_or_parttime}</p>
      </div>
      <div>
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <button className="primary-btn">View Details</button>
    </div>
  );
};

export default FeaturedJobCarts;
