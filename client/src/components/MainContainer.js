import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Contests from "./pages/Contests";
import Munchers from "./pages/Munchers";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Contests") {
      return <Contests description={""} contestListClick={"new contest"} />;
    }
    if (currentPage === "Munchers") {
      return <Munchers />;
    }
    if (currentPage === "SignUp") {
      return <SignUp />;
    }
    return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
  );
}
