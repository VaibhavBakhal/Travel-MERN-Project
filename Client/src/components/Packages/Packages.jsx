import React, { useState } from "react";
import "./Packages.css";
import useProperties from "../../hooks/usePackage";
import { PuffLoader } from "react-spinners";
import Element from "../element/Element";
import ReactPaginate from "react-paginate";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS file

const Packages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const { data, isError, isLoading } = useProperties();
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false); // Added state
  const [isOverlayVisible, setOverlayVisible] = useState(false); // Added state for overlay

  const applyDateFilter = () => {
    const startDate = selectedDateRange[0].startDate;
    const endDate = selectedDateRange[0].endDate;

    return data
      .filter((item) => {
        const itemDate = new Date(item.departureDate); // Use departureDate
        return itemDate >= startDate && itemDate <= endDate;
      })
      .sort((a, b) => new Date(a.departureDate) - new Date(b.departureDate)); // Use departureDate
  };

  const sortByPriceLowToHigh = () => {
    const sortedData = data.slice().sort((a, b) => a.price - b.price);
    return sortedData;
  };

  const sortByPriceHighToLow = () => {
    const sortedData = data.slice().sort((a, b) => b.price - a.price);
    return sortedData;
  };

  const sortByNameAZ = () => {
    const sortedData = data
      .slice()
      .sort((a, b) => a.destination.localeCompare(b.destination));
    return sortedData;
  };

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  const applyFilter = () => {
    if (filter === "date") {
      return applyDateFilter();
    } else if (filter === "priceLowToHigh") {
      return sortByPriceLowToHigh();
    } else if (filter === "priceHighToLow") {
      return sortByPriceHighToLow();
    } else if (filter === "nameAZ") {
      return sortByNameAZ();
    } else {
      return data;
    }
  };

  const sortedData = applyFilter(); // Apply sorting and filtering

  // Pagination code
  const itemsPerPage = 3;
  const pageCount = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = sortedData.slice(startIndex, endIndex);

  const handleFilterClick = (selectedFilter) => {
    if (selectedFilter === "date") {
      setDatePickerVisible(!isDatePickerVisible);
      setOverlayVisible(!isOverlayVisible); // Toggle overlay visibility
    } else {
      setDatePickerVisible(false);
      setFilter(selectedFilter);
      setCurrentPage(0);
      setOverlayVisible(false); // Hide overlay for other filters
    }
  };

  const handleDateRangeConfirm = () => {
    const filteredData = applyDateFilter();
    setDatePickerVisible(false);
    setFilter("date");
    setCurrentPage(0);
    setOverlayVisible(false); // Hide overlay for other filters
  };
  return (
    <div className="w-packages flexColCenter paddings">
      <div className="filterPackages flexStart">
        <div
          className={`filterDate filterStyle ${
            filter === "date" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("date")}
        >
          <img src="dateblack.svg" alt="" />
          <span className="filtertext">Date</span>
        </div>
        <div
          className={`filterPricelow filterStyle ${
            filter === "priceLowToHigh" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("priceLowToHigh")}
        >
          <img src="lowprice.svg" alt="" />
          <span className="filtertext">Price low to High</span>
        </div>
        <div
          className={`filterpricehight filterStyle ${
            filter === "priceHighToLow" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("priceHighToLow")}
        >
          <img src="highprice.svg" alt="" />
          <span className="filtertext">Price High to low</span>
        </div>
        <div
          className={`filtername filterStyle ${
            filter === "nameAZ" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("nameAZ")}
        >
          <img src="a-z.svg" alt="" />
          <span className="filtertext">Name (A-z)</span>
        </div>
      </div>
      <div className={`overlay ${isOverlayVisible ? "show" : ""}`}></div>{" "}
      {/* Overlay element */}
      {isDatePickerVisible && (
        <div className={`datePickerPopup ${isOverlayVisible ? "show" : ""}`}>
          <DateRangePicker
            ranges={selectedDateRange}
            onChange={(ranges) => setSelectedDateRange([ranges.selection])}
          />
          <button
            className="button datepickerbutton"
            onClick={handleDateRangeConfirm}
          >
            Apply Date Filter
          </button>
        </div>
      )}
      <div className="paddings flexCenter packages">
        {itemsToShow.map((card, i) => (
          <Element card={card} key={i} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={"> "}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"previous"}
        nextLinkClassName={"next"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Packages;
