import React, { useState, useEffect } from "react";
import CVSection from "../components/cvSection.jsx";
import { Loader } from "lucide-react";
import HeroSection from "../components/HeroSection.jsx";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <Loader className="animate-spin text-blue-500" size={32} />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <CVSection />
    </div>
  );
}

export default Home;
