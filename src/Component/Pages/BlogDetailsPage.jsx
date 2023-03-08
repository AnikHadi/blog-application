import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../../features/blog/blogSlice";
import BlogDetails from "../BlogDetailsPage/BlogDetails";
import GoHomeBtn from "../BlogDetailsPage/GoHomeBtn";

const BlogDetailsPage = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  // error loading এই গুলা দিয়ে checking করে conditionally render করলে কনো event এ click করলে page reload  হয়ে  first  এ চলে যাচ্ছে। এই জন্য  conditionally render implement করে ও use করি নাই।

  // // decide what to render
  // let contain = null;
  // if (isLoading) contain = <Loading />;
  // if (!isLoading && isError)
  //   contain = <div className="col-span-12">{error}</div>;

  // if (!isError && !isLoading && !blog.id)
  //   contain = <div className="col-span-12">No Blog found!</div>;
  // if (!isError && !isLoading && blog?.id) contain = <BlogDetails />;

  return (
    <>
      <GoHomeBtn />
      {/* {contain} */}
      <BlogDetails />
    </>
  );
};

export default BlogDetailsPage;
