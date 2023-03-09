import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { putBlog } from "../blog/blogAPI";
import { getBlogs } from "./blogsAPI";

// initialize state
const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

export const updateBlogs = createAsyncThunk(
  "blogs/updateBlogs",
  async ({ id, updateBlogData }, thunkAPI) => {
    try {
      const blog = await putBlog({ id, updateBlogData });
      return blog;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error?.message;
      })
      .addCase(updateBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateBlogs.fulfilled, (state, action) => {
        const index = state.blogs.findIndex(
          (blog) => blog.id === action.payload.id
        );
        state.blogs.splice(index, 1, action.payload);
        state.isLoading = false;
      })
      .addCase(updateBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
