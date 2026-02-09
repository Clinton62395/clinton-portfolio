import { FaAddressCard } from "react-icons/fa";
import { MdOutlineWork, MdHomeRepairService } from "react-icons/md";
import { BiSolidContact, BiStore } from "react-icons/bi";

export const menuItems = [
  { path: "/about", icon: FaAddressCard, label: "About Me" },
  { path: "/projects", icon: MdOutlineWork, label: "Projects" },
  { path: "/service", icon: MdHomeRepairService, label: "Services" },
  { path: "/contact", icon: BiSolidContact, label: "Contact" },
  { path: "/store", icon: BiStore, label: "Store" },
];
