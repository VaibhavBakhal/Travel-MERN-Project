// import React, { useState } from "react";
// import "./Packages.css";
// import { getAllPackages } from "../../utils/api";
// import useProperties from "../../hooks/usePackage";
// import { PuffLoader } from "react-spinners";
// import Element from "../element/Element";
// import ReactPaginate from "react-paginate";

// const Packages = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [filter, setFilter] = useState("");
//   const { data, isError, isLoading } = useProperties();
//   if (isError) {
//     return (
//       <div className="wrapper">
//         <span>Error while fetching data</span>
//       </div>
//     );
//   }
//   if (isLoading) {
//     return (
//       <div className="wrapper flexCenter" style={{ height: "60vh" }}>
//         <PuffLoader
//           height="80"
//           width="80"
//           radius={1}
//           color="#4066ff"
//           aria-label="puff-loading"
//         />
//       </div>
//     );
//   }
//   // pagination code
//   const itemsPerPage = 3; // Number of items per page
//   const pageCount = Math.ceil(data.length / itemsPerPage); // Calculate the total number of pages

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage.selected);
//   };

//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const itemsToShow = data.slice(startIndex, endIndex);

//   return (
//     <div className="w-packages flexColCenter paddings">
//       <div className="filterPackages flexStart ">
//         <div className="filterDate filterStyle">
//           <img src="dateblack.svg" alt="" />
//           <span className="filtertext">Date</span>
//         </div>
//         <div className="filterPricelow filterStyle">
//           <img src="lowprice.svg" alt="" />
//           <span className="filtertext">price low to High</span>
//         </div>
//         <div className="filterpricehight filterStyle">
//           <img src="highprice.svg" alt="" />
//           <span className="filtertext">Price High to low</span>
//         </div>
//         <div className="filtername filterStyle">
//           <img src="a-z.svg" alt="" />
//           <span className="filtertext">Name (A-z)</span>
//         </div>
//       </div>
//       <div className="paddings flexCenter packages">
//         {itemsToShow.map((card, i) => (
//           <Element card={card} key={i} />
//         ))}
//       </div>
//       <ReactPaginate
//         previousLabel={"<"}
//         nextLabel={"> "}
//         pageCount={pageCount}
//         onPageChange={handlePageChange}
//         containerClassName={"pagination"}
//         previousLinkClassName={"previous"}
//         nextLinkClassName={"next"}
//         disabledClassName={"disabled"}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// };

// export default Packages;
import React, { useState } from "react";
import "./Packages.css";
import useProperties from "../../hooks/usePackage";
import { PuffLoader } from "react-spinners";
import Element from "../element/Element";
import ReactPaginate from "react-paginate";

const Packages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const { data, isError, isLoading } = useProperties();

  const sortByDate = () => {
    const today = new Date();
    const selectedDate = new Date(); // Replace this with your selected date logic
    selectedDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

    const sortedData = data
      .filter((item) => new Date(item.date) >= selectedDate)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    return sortedData;
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

  // Apply sorting function before pagination
  let sortedData = data;

  if (filter === "date") {
    sortedData = sortByDate();
  } else if (filter === "priceLowToHigh") {
    sortedData = sortByPriceLowToHigh();
  } else if (filter === "priceHighToLow") {
    sortedData = sortByPriceHighToLow();
  } else if (filter === "nameAZ") {
    sortedData = sortByNameAZ();
  }

  // Pagination code
  const itemsPerPage = 3;
  const pageCount = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = sortedData.slice(startIndex, endIndex);

  // Filter click handlers
  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
    setCurrentPage(0); // Reset to the first page when changing filter
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

//
//
//
//
//
//
//
//
//
//
//
// export default Packages;
// import React, { useState } from "react";
// import "./Packages.css";
// import useProperties from "../../hooks/usePackage";
// import { PuffLoader } from "react-spinners";
// import Element from "../element/Element";
// import ReactPaginate from "react-paginate";
// import { Button } from "@mantine/core";
// import { DatePicker } from "@mantine/dates";
// const Packages = () => {
//   // const [currentPage, setCurrentPage] = useState(0);
//   // const [filter, setFilter] = useState("");
//   // const [startDate, setStartDate] = useState(null);
//   // const [endDate, setEndDate] = useState(null);
//   // const { data, isError, isLoading } = useProperties();
//   const [currentPage, setCurrentPage] = useState(0);
//   const [filter, setFilter] = useState("");
//   const [startDate, setStartDate] = (useState < Date) | (null > null);
//   const [endDate, setEndDate] = (useState < Date) | (null > null);

//   const { data, isError, isLoading } = useProperties();

//   // const sortByDate = () => {
//   //   const sortedData = data
//   //     .filter((item) => {
//   //       const itemDate = new Date(item.date);
//   //       return (
//   //         (!startDate || itemDate >= startDate) &&
//   //         (!endDate || itemDate <= endDate)
//   //       );
//   //     })
//   //     .sort((a, b) => new Date(a.date) - new Date(b.date));

//   //   return sortedData;
//   // };

//   const sortByDate = () => {
//     const sortedData = data
//       .filter((item) => {
//         const itemDate = new Date(item.date);
//         return (
//           (!startDate || itemDate >= startDate) &&
//           (!endDate || itemDate <= endDate)
//         );
//       })
//       .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

//     return sortedData;
//   };

//   const sortByPriceLowToHigh = () => {
//     const sortedData = data.slice().sort((a, b) => a.price - b.price);
//     return sortedData;
//   };

//   const sortByPriceHighToLow = () => {
//     const sortedData = data.slice().sort((a, b) => b.price - a.price);
//     return sortedData;
//   };

//   const sortByNameAZ = () => {
//     const sortedData = data
//       .slice()
//       .sort((a, b) => a.destination.localeCompare(b.destination));
//     return sortedData;
//   };

//   if (isError) {
//     return (
//       <div className="wrapper">
//         <span>Error while fetching data</span>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div className="wrapper flexCenter" style={{ height: "60vh" }}>
//         <PuffLoader
//           height="80"
//           width="80"
//           radius={1}
//           color="#4066ff"
//           aria-label="puff-loading"
//         />
//       </div>
//     );
//   }

//   // Apply sorting function before pagination
//   let sortedData = data;

//   if (filter === "date") {
//     sortedData = sortByDate();
//   } else if (filter === "priceLowToHigh") {
//     sortedData = sortByPriceLowToHigh();
//   } else if (filter === "priceHighToLow") {
//     sortedData = sortByPriceHighToLow();
//   } else if (filter === "nameAZ") {
//     sortedData = sortByNameAZ();
//   }

//   // Pagination code
//   const itemsPerPage = 3;
//   const pageCount = Math.ceil(sortedData.length / itemsPerPage);

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage.selected);
//   };

//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const itemsToShow = sortedData.slice(startIndex, endIndex);

//   // Filter click handlers
//   const handleFilterClick = (selectedFilter) => {
//     setFilter(selectedFilter);
//     setCurrentPage(0); // Reset to the first page when changing filter
//   };

//   const clearDateRange = () => {
//     setStartDate(null);
//     setEndDate(null);
//   };

//   return (
//     <div className="w-packages flexColCenter paddings">
//       <div className="filterPackages flexStart">
//         <div
//           className={`filterDate filterStyle ${
//             filter === "date" ? "active" : ""
//           }`}
//           onClick={() => handleFilterClick("date")}
//         >
//           <img src="dateblack.svg" alt="" />
//           <span className="filtertext">Date</span>
//         </div>
//         <div
//           className={`filterPricelow filterStyle ${
//             filter === "priceLowToHigh" ? "active" : ""
//           }`}
//           onClick={() => handleFilterClick("priceLowToHigh")}
//         >
//           <img src="lowprice.svg" alt="" />
//           <span className="filtertext">Price low to High</span>
//         </div>
//         <div
//           className={`filterpricehight filterStyle ${
//             filter === "priceHighToLow" ? "active" : ""
//           }`}
//           onClick={() => handleFilterClick("priceHighToLow")}
//         >
//           <img src="highprice.svg" alt="" />
//           <span className="filtertext">Price High to low</span>
//         </div>
//         <div
//           className={`filtername filterStyle ${
//             filter === "nameAZ" ? "active" : ""
//           }`}
//           onClick={() => handleFilterClick("nameAZ")}
//         >
//           <img src="a-z.svg" alt="" />
//           <span className="filtertext">Name (A-z)</span>
//         </div>
//       </div>

//       {/* {filter === "date" && (
//         <>
//           <div className="date-picker-container">
//             <DatePicker
//               value={startDate}
//               onChange={setStartDate}
//               label="Start Date"
//               placeholder="Select start date"
//               clearable
//             />
//             <DatePicker
//               value={endDate}
//               onChange={setEndDate}
//               label="End Date"
//               placeholder="Select end date"
//               clearable
//             />
//           </div>
//           <div className="filter-buttons">
//             <Button
//               variant="outline"
//               color="blue"
//               onClick={() => handleFilterClick("date")}
//               disabled={!startDate || !endDate}
//             >
//               Apply Date Filter
//             </Button>
//             <Button variant="outline" color="red" onClick={clearDateRange}>
//               Clear Date Filter
//             </Button>
//           </div>
//         </>
//       )} */}
//       {filter === "date" && (
//         <>
//           <div className="date-picker-container">
//             <DatePicker
//               value={startDate}
//               onChange={setStartDate}
//               label="Start Date"
//               placeholder="Select start date"
//               clearable
//             />
//             <DatePicker
//               value={endDate}
//               onChange={setEndDate}
//               label="End Date"
//               placeholder="Select end date"
//               clearable
//             />
//           </div>
//           <div className="filter-buttons">
//             <Button
//               variant="outline"
//               color="blue"
//               onClick={() => handleFilterClick("date")}
//               disabled={!startDate || !endDate}
//             >
//               Apply Date Filter
//             </Button>
//             <Button variant="outline" color="red" onClick={clearDateRange}>
//               Clear Date Filter
//             </Button>
//           </div>
//         </>
//       )}
//       <div className="paddings flexCenter packages">
//         {itemsToShow.map((card, i) => (
//           <Element card={card} key={i} />
//         ))}
//       </div>

//       <ReactPaginate
//         previousLabel={"<"}
//         nextLabel={"> "}
//         pageCount={pageCount}
//         onPageChange={handlePageChange}
//         containerClassName={"pagination"}
//         previousLinkClassName={"previous"}
//         nextLinkClassName={"next"}
//         disabledClassName={"disabled"}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// };

// export default Packages;
