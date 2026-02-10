import React from "react";

const FilterButton = ({ label, isActive, onClick, count = 0, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-3 rounded-xl font-medium transition-all duration-300 
        flex items-center justify-center gap-2 min-w-[120px]
        ${
          isActive
            ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/30"
            : "bg-gray-800/40 text-gray-300 hover:bg-gray-700/60 hover:text-white border border-white/10"
        }
      `}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm font-semibold">{label}</span>
      {count > 0 && (
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-bold ${
            isActive ? "bg-white/30" : "bg-gray-700/70"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default FilterButton;
