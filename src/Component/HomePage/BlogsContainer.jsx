import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
// import Loading from "../UI/Loading";
import SingleBlog from "./SingleBlog";

const BlogsContainer = () => {
  const dispatch = useDispatch();

  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { sortBy, filterSaved } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // copy the blogs to sort
  const sortBlogs = JSON.parse(JSON.stringify(blogs));
  if (sortBy === "most_liked") {
    sortBlogs?.sort((a, b) => b.likes - a.likes);
  } else if (sortBy === "newest") {
    sortBlogs?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  const filterBySave = (blog) => {
    switch (filterSaved) {
      case "all":
        return blog;
      case "saved":
        return blog.isSaved;
      default:
        return blog;
    }
  };

  // error loading এই গুলা দিয়ে checking করে conditionally render করলে কনো event এ click করলে page reload  হয়ে  first  এ চলে যাচ্ছে। এই জন্য  conditionally render implement করে ও use করি নাই।

  // // something
  // let contain;
  // if (isLoading) contain = <Loading />;
  // if (!isLoading && isError)
  //   contain = <div className="col-span-12">{error}</div>;

  // if (!isError && !isLoading && blogs?.length === 0)
  //   contain = <div className="col-span-12">No Blog found!</div>;
  // if (!isError && !isLoading && blogs?.length > 0)
  //   contain = sortBlogs
  //     .filter(filterBySave)
  //     .map((blog) => <SingleBlog key={blog.id} blog={blog} />);
  return (
    <main className="post-container" id="lws-postContainer">
      {/* {contain} */}
      {sortBlogs.filter(filterBySave).map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </main>
  );
};

export default BlogsContainer;
