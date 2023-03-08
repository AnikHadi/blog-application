import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateBlogs } from "../../features/blogs/blogsSlice";

const SingleBlog = ({ blog }) => {
  const dispatch = useDispatch();
  const { id, title, createdAt, image, likes, tags, isSaved } = blog || {};

  const tagsShow = tags.map((tag) => {
    return <span key={tag}>#{tag}</span>;
  });

  const handlerLike = (id) => {
    const updateBlogData = {
      ...blog,
      likes: blog.likes + 1,
    };
    // console.log(updateBlog);
    dispatch(updateBlogs({ id, updateBlogData }));
  };

  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i
              onClick={() => handlerLike(id)}
              className="fa-regular fa-thumbs-up like-btn"
            ></i>{" "}
            {likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
          {tagsShow}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default SingleBlog;
