import axiosInstance from "../../utils/axios";

export const getBlogs = async () => {
  const response = await axiosInstance.get("/blogs");
  return response.data;
};

export const putBlogs = async ({ id, updateBlogData }) => {
  const response = await axiosInstance.put(`/blogs/${id}`, updateBlogData);

  return response.data;
};
