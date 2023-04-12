import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { Link, json, useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
  faCalendar,
  faCalendarCheck,
  faPhone,
  faVoicemail,
  faMailBulk,
  faMailForward,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../utils/fakeDB";

const JobDetails = () => {
  const JobDetailsId = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch("/FeaturedJobs.json")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.find((job) => job.id == JobDetailsId.jobId);
        setJob(jobData);
      });
  }, []);

  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    location,
    phone,
    email,
  } = job;

  const handleAddToCart = (id) => {
    console.log(id);
    addToDb(id);
  };

  return (
    <div>
      <div className="Job-details-banner">
        <h1>Job Details</h1>
      </div>

      <div className="full-job-details">
        <div className="Job-details-text">
          <p>
            <span className="bold-title">Job Description : </span>
            {job_description}
          </p>
          <p>
            <span className="bold-title">Job Responsibility : </span>
            {job_responsibility}
          </p>
          <p>
            <span className="bold-title">Educational Requirements : </span>
            {educational_requirements}
          </p>
          <p>
            <span className="bold-title">Experiences : </span>
            {experiences}
          </p>
        </div>

        <div className="Job-details-cart">
          <div className="job-details-cart-color">
            <h3>Job Details</h3>
            <p>
              <span className="bold-title">
                <FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary:{" "}
              </span>
              {salary}
            </p>
            <p>
              <span className="bold-title">
                <FontAwesomeIcon icon={faCalendarCheck} /> Job Title :{" "}
              </span>
              {job_title}
            </p>
            <h3>Contact Information</h3>
            <p>
              <span className="bold-title">
                <FontAwesomeIcon icon={faPhone} /> Phone :{" "}
              </span>
              {phone}
            </p>
            <p>
              <span className="bold-title">
                <FontAwesomeIcon icon={faEnvelope} /> Email :{" "}
              </span>
              {email}
            </p>
            <p>
              <span className="bold-title">
                <FontAwesomeIcon icon={faLocationDot} /> Address :{" "}
              </span>
              {location}
            </p>
          </div>
          <button onClick={() => handleAddToCart(id)} className="primary-btn">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
