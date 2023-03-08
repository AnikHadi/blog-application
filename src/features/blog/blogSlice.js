import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, putBlog } from "./blogAPI";

// initialize state
const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (blogId) => {
  const blog = await getBlog(blogId);
  return blog;
});

export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async ({ id, updateBlogData }, thunkAPI) => {
    try {
      const blog = await putBlog({ id, updateBlogData });
      return blog;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error?.message;
      })
      .addCase(updateBlog.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.blog = action.payload;
        state.isLoading = false;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
