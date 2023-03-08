import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBySaved, sortByShow } from "../../features/filter/filterSlice";

const FilterSideView = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [filterValue, setFilterValue] = useState("all");

  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  dispatch(sortByShow(selectedValue));
  dispatch(filterBySaved(filterValue));

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                value="all"
                checked={filterValue === "all"}
                onChange={handleChange}
                className="radio"
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                value="saved"
                onChange={handleChange}
                checked={filterValue === "saved"}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSideView;
