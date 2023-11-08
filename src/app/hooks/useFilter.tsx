import { useContext } from "react";
import { FilterContext } from "../context/filter-context";

const useFilter = () => {
  return useContext(FilterContext);
};

export default useFilter;
