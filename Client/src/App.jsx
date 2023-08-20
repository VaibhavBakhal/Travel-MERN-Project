import { React, useState, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./pages/Website";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About/About";
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
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
