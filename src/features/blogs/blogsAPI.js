import axiosInstance from "../../utils/axios";

export const getBlogs = async () => {
  // { tags, searchText }
  // let queryString = "";
  // if (tags.length > 0) {
  //   // queryString = tags.map((tag) => `tags_like=${tag}`).join("&");
  // }
  // if (searchText !== "") {
  //   queryString += `&q=${searchText}`;
  // }

  const response = await axiosInstance.get("/blogs");
  // `/blogs${queryString}`

  return response.data;
};

export const putBlogs = async ({ id, updateBlogData }) => {
  const response = await axiosInstance.put(`/blogs/${id}`, updateBlogData);

  return response.data;
};
