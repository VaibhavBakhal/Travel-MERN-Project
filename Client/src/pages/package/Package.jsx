import React from "react";

import "./Package.css";
import { useLocation } from "react-router-dom";
import { getPackage } from "../../utils/api";
import { useQuery } from "react-query";

const Package = () => {
  // to get data after the properties
  // http://localhost:5173/packages/64cba4558cf2df793e4f2a52
  // we created the id using use useLocation
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  console.log(id);
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getPackage(id)
  );

  return (
    <div className="w-package">
      <div>{data?.destination}</div>
    </div>
  );
};

export default Package;
