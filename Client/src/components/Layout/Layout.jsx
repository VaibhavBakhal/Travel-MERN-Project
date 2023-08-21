import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutHero from "../AboutComponents/Hero/aboutHero";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  console.log(location);
  const [span1, setspan1] = useState("");
  // setspan1(location.state.span1);
  const [span2, setSpan2] = useState("");
  // setSpan2(location.state.span2);
  const [background1, setBackground1] = useState("");
  // setBackground1(location.state.background);
  console.log(location);
  useEffect(() => {
    setspan1(location.state?.span1);
    setSpan2(location.state?.span2);
    setBackground1(location.state?.background1);
  }, [location]);

  // const location = useLocation();

  return (
    <>
      <div>
        <AboutHero span1={span1} span2={span2} background1={background1} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default React.memo(Layout);
