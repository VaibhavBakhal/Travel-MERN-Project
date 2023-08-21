import React from "react";
import { useQuery } from "react-query";
import { getAllPackages } from "../utils/api";

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allPackge",
    getAllPackages,
    { reftchOnWindowFocus: false }
  );
  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
