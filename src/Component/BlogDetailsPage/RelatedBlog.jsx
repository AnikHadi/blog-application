import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import RelatedBlogsList from "./RelatedBlogsList";

const RelatedBlog = ({ currentBlogId, tags }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, currentBlogId }));
  }, [dispatch, tags, currentBlogId]);

  const {
    relatedBlogs = [],
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.relatedBlogs);
  // // decide what to render
  // let contain = null;
  // if (isLoading) contain = <Loading />;
  // if (!isLoading && isError)
  //   contain = <div className="col-span-12">{error}</div>;

  // if (!isError && !isLoading && relatedBlogs.length === 0)
  //   contain = <div className="col-span-12">No related Blogs found!</div>;
  // if (!isError && !isLoading && relatedBlogs.length > 0)
  //   contain = relatedBlogs.map((blog) => (
  //     <RelatedBlogsList blog={blog} key={blog.id} />
  //   ));
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      {/* {contain} */}
      {relatedBlogs?.map((blog) => (
        <RelatedBlogsList blog={blog} key={blog.id} />
      ))}
    </aside>
  );
};

export default RelatedBlog;
