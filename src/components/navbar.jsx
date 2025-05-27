import React from "react";
import { BiHelpCircle, BiSolidContact } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdHomeRepairService, MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";

function PagesNavbar() {
  return (
    <nav className="bi-fixed bi-top-0 bi-left-0 bi-w-full bi-bg-[#1e1b4b] bi-shadow-lg  bi-p-4 bi-z-50">
      <div className="bi-container bi-mx-auto bi-flex bi-items-center bi-justify-between">
        <Link
          to="/"
          className="text-warning bi-font-bold bi-text-2xl bi-flex bi-items-center bi-space-x-2"
        >
          <span className="bi-w-20 bi-mr-10">
            <img src="mylogo.png" alt="logo" />
          </span>
          <HiHome />
          <span className="underline-middle">Home</span>
        </Link>
        <div className="bi-flex bi-space-x-6">
          <Link
            to="/about"
            className="text-warning bi-font-semibold bi-flex bi-items-center bi-space-x-2"
          >
            <FaAddressCard />
            <span className="underline-middle">About ME</span>
          </Link>
          <Link
            to="/projects"
            className="text-warning bi-font-semibold bi-flex bi-items-center bi-space-x-2"
          >
            <MdOutlineWork />
            <span className="underline-middle">Projects</span>
          </Link>
          <Link
            to="/service"
            className="text-warning bi-font-semibold bi-flex bi-items-center bi-space-x-2"
          >
            <MdHomeRepairService />
            <span className="underline-middle">Services</span>
          </Link>
          <Link
            to="/contact"
            className="text-warning bi-font-semibold bi-flex bi-items-center bi-space-x-2"
          >
            <BiSolidContact />
            <span className="underline-middle">Contact</span>
          </Link>
         
        </div>
      </div>
    </nav>
  );
}

export default PagesNavbar;
