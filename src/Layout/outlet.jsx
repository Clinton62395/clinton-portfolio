import React from "react";
import { Outlet } from "react-router-dom";
import PagesNavbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
function RoutOutlet() {
  return (
    <>
      <PagesNavbar />
      <div>
        <Outlet />
      </div>
      <footer className="bi-mt-10">
        <Footer />
      </footer>
    </>
  );
}
export default RoutOutlet;
