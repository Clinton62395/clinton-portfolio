import React from "react";
import { Outlet } from "react-router-dom";
import PagesNavbar from "../components/navbar";
function RoutOutlet() {
  return (
    <>
      <PagesNavbar />
      <Outlet />
    </>
  );
}
export default RoutOutlet;
