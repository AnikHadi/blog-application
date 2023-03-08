import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import SingleBlog from "./SingleBlog";

const BlogsContainer = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { sortBy, filterSaved } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchBlogs({ sortBy }));
  }, [dispatch, sortBy]);

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
  //   contain = blogs.map((blog) => <SingleBlog key={blog.id} blog={blog} />);
  return (
    <main className="post-container" id="lws-postContainer">
      {/* {contain} */}
      {blogs?.filter(filterBySave).map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </main>
  );
};

export default BlogsContainer;
