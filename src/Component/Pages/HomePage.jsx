import React from "react";
import BlogsContainer from "../HomePage/BlogsContainer";
import FilterSideView from "../HomePage/FilterSideView";

const HomePage = () => {
  return (
    <section className="wrapper">
      <FilterSideView />
      {/* <!-- posts container  --> */}
      <BlogsContainer />
      {/* <!-- posts container ends --> */}
    </section>
  );
};

export default HomePage;
