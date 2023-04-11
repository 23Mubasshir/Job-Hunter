import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import './FeaturedJobCarts.css'
import { Link } from "react-router-dom";


const FeaturedJobCarts = ({job}) => {
  const {
    id,
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
      <div className="col-1">
        <p>{remote_or_onsite}</p>
        <p>{fulltime_or_parttime}</p>
      </div>
      <div className="col-2">
        <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
        <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary: {salary}</p>
      </div>
      <button className="primary-btn"><Link to={`/job/${id}`}>View Details</Link></button>
    </div>
  );
};

export default FeaturedJobCarts;
