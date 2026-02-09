import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "billydoumbouya5210@gmail.com",
    href: "mailto:billydoumbouya5210@gmail.com",
    color: "text-blue-400",
  },
  {
    icon: FaPhoneAlt,
    label: "Téléphone",
    value: "+224 623 95 20 11",
    href: "tel:+224623952011",
    color: "text-green-400",
  },
  {
    icon: BsWhatsapp,
    label: "WhatsApp",
    value: "+234 705 674 5571",
    href: "https://wa.me/2347056745571",
    color: "text-emerald-400",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Localisation",
    value: "Kankan, Guinée",
    href: null,
    color: "text-purple-400",
  },
];
