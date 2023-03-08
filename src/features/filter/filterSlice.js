import { createSlice } from "@reduxjs/toolkit";

// initialize state
const initialState = {
  sortBy: "",
  filterSaved: "All",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortByShow: (state, action) => {
      state.sortBy = action.payload;
    },
    filterBySaved: (state, action) => {
      state.filterSaved = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { sortByShow, filterBySaved } = filterSlice.actions;
