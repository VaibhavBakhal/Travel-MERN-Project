import { React, useState, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./pages/Website";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Packages from "./components/Packages/Packages";
import Package from "./pages/package/Package";
// import TrendingPackage from "./components/Package/TrendingPackage";
function App() {
  const queryClient = new QueryClient();
  // const [userDetails, setUserDetails] = useState({
  //   favourites: [],
  //   bookings: [],
  //   token: null,
  // });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Website />} />
            <Route path="/about" element={<About />} />

            {/* <Route index element={<Properties />} />
              <Route path=":propertyId" element={<Property />} /> */}
            <Route element={<Layout />}>
              <Route path="/honeymoon"></Route>
              <Route path="/packages">
                <Route index element={<Packages />} />
                <Route path=":packageId" element={<Package />} />
              </Route>
              <Route path="/events"></Route>
              <Route path="/makeyourownpackage"></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
