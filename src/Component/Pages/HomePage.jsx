import React from "react";
import BlogsContainer from "../HomePage/BlogsContainer";
import FilterSideView from "../HomePage/FilterSideView";

const HomePage = () => {
  return (
    <section className="wrapper">
      <FilterSideView />
      <BlogsContainer />
    </section>
  );
};

export default HomePage;
