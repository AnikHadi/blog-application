import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../../features/blog/blogSlice";
import RelatedBlog from "./RelatedBlog";

const BlogDetails = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);
  const { id, title, image, likes, tags, isSaved, description } = blog || {};

  const tagsShow = tags?.map((tag, i) =>
    tags.length === i + 1 ? (
      <span key={tag}>#{tag}</span>
    ) : (
      <span key={tag}>#{tag}, </span>
    )
  );

  const handlerSaveBlog = (id) => {
    const updateBlogData = {
      ...blog,
      isSaved: !blog.isSaved,
    };
    dispatch(updateBlog({ id, updateBlogData }));
  };

  const handlerLike = (id) => {
    const updateBlogData = {
      ...blog,
      likes: blog.likes + 1,
    };

    dispatch(updateBlog({ id, updateBlogData }));
  };

  return (
    <section className="post-page-container">
      <main className="post">
        <img
          src={image}
          alt="githum"
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {tagsShow}
          </div>
          <div className="btn-group">
            <button className="like-btn" id="lws-singleLinks">
              <i
                onClick={() => handlerLike(id)}
                className="fa-regular fa-thumbs-up"
              ></i>{" "}
              {likes}
            </button>

            <button
              className={`${isSaved && "active"}  save-btn`}
              id="lws-singleSavedBtn"
              onClick={() => handlerSaveBlog(id)}
            >
              <i className="fa-regular fa-bookmark"></i> Saved
            </button>
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>

      <RelatedBlog currentBlogId={id} tags={tags} />
    </section>
  );
};

export default BlogDetails;
