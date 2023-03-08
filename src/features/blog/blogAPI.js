import axiosInstance from "../../utils/axios";

export const getBlog = async (blogId) => {
  const response = await axiosInstance.get(`/blogs/${blogId}`);
  return response.data;
};

export const putBlog = async ({ id, updateBlogData }) => {
  const response = await axiosInstance.put(`/blogs/${id}`, updateBlogData);

  return response.data;
};
