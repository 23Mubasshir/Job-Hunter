import React from "react";
import './CategoryJobCart.css'

const CategoryJobCart = (props) => {
  const { categoryLogo, categoryName, jobsAvailable } = props.single;
  return (
    <div className="job-category-list">
      <img src={categoryLogo} alt="" />
      <h3>{categoryName}</h3>
      <p>{jobsAvailable}</p>
    </div>
  );
};

export default CategoryJobCart;
