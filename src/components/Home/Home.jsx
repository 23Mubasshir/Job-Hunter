import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner'
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
        <>
          <HomeBanner></HomeBanner> 
          <CategoryList></CategoryList>
          <FeaturedJob></FeaturedJob>
        </>
    );
};

export default Home;