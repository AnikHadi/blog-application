import axiosInstance from "../../utils/axios";

export const getRelatedBlogs = async ({ tags, currentBlogId }) => {
  const limit = 5;
  let queryString =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${currentBlogId}&_limit=${limit}`
      : `id_ne=${currentBlogId}&_limit=${limit}`;

  const response = await axiosInstance.get(`/blogs?${queryString}`);

  return response.data;
};
