import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import { useState, useEffect } from "react";
import "./Home.css";
import CategoryJobCart from "../CategoryJobCart/CategoryJobCart";
import { useLoaderData } from "react-router-dom";
import FeaturedJobCarts from "../FeaturedJobCarts/FeaturedJobCarts";

const Home = () => {
  {
    /* --------Featured Jobs------ */
  }
  const featuredJobsData = useLoaderData();

  {
    /* --------Job Category List------ */
  }
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("CategoryList.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <>
      <HomeBanner></HomeBanner>
      {/* --------Job Category List------ */}
      <div className="category-list">
        <div className="category-list-header">
          <h1>Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="category-job-cart">
          {category.map((single, idk) => (
            <CategoryJobCart key={idk} single={single}></CategoryJobCart>
          ))}
        </div>
      </div>

      {/* --------Featured Jobs------ */}
      <div className="category-list">
        <div className="category-list-header">
          <h1>Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="job-row">
          {featuredJobsData.map((job, idk) => (
            <FeaturedJobCarts key={idk}
            job={job}></FeaturedJobCarts>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
