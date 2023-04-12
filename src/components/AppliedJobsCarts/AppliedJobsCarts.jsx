import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './AppliedJobsCarts.css'
import { Link } from "react-router-dom";


const AppliedJobsCarts = ({job}) => {
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
        <div>
          
        <div className="full-job-cart">

          <div className="img-div">
          <img src={company_logo} alt="" />
          </div>

          <div>
          <h3>{job_title}</h3>
          <p>{company_name}</p>
          <div className="col-11">
            <p>{remote_or_onsite}</p>
            <p>{fulltime_or_parttime}</p>
          </div>
          <div className="col-21">
            <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
            <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary: {salary}</p>
          </div>
          </div>

          <div className="btn-div">
          <button className="primary-btn"><Link to={`/job/${id}`}>View Details</Link></button>
          </div>
        </div>
        </div>
      );
    };
    

export default AppliedJobsCarts;