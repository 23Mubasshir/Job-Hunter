import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utils/fakeDB";
import AppliedJobsCarts from "../AppliedJobsCarts/AppliedJobsCarts";
import './AppliedJobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot, faAngleDown } from '@fortawesome/free-solid-svg-icons'


const AppliedJobs = () => {
  const pData = useLoaderData();

  let cart = [];
  const savedCart = getStoredCart();
  for (const id in savedCart) {
    const foundProduct = pData.find((product) => product.id == id);
    if (foundProduct) {
      cart.push(foundProduct);
    }
  }
  console.log(cart);
  return (
    <div>
      <div className="Job-details-banner">
        <h1>Applied Jobs</h1>
      </div>
      <div className="single-card">
      <button className="btn-filter">Filter By <FontAwesomeIcon icon={faAngleDown} /></button>
      <div >
        {cart.map((job, idk) => (
          <AppliedJobsCarts key={idk} job={job}></AppliedJobsCarts>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
