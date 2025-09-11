import React from "react";

const TigreSQL = ({ top = "50px", left = "50px", scale = 1 }) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        transform: `scale(${scale})`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="150"
        height="150"
      >
        {/* Cuerpo */}
        <circle cx="100" cy="100" r="80" fill="#f4a300" stroke="#000" strokeWidth="4"/>
        
        {/* Orejas */}
        <circle cx="50" cy="40" r="20" fill="#f4a300" stroke="#000" strokeWidth="3"/>
        <circle cx="150" cy="40" r="20" fill="#f4a300" stroke="#000" strokeWidth="3"/>

        {/* Ojos */}
        <circle cx="70" cy="90" r="12" fill="#fff"/>
        <circle cx="130" cy="90" r="12" fill="#fff"/>
        <circle cx="70" cy="90" r="6" fill="#00f"/>
        <circle cx="130" cy="90" r="6" fill="#00f"/>

        {/* Nariz */}
        <polygon points="95,115 105,115 100,125" fill="#000"/>

        {/* Boca */}
        <path d="M 90 130 Q 100 140 110 130" stroke="#000" strokeWidth="3" fill="none"/>

        {/* Rayas */}
        <path d="M 40 100 L 60 80" stroke="#000" strokeWidth="4"/>
        <path d="M 160 100 L 140 80" stroke="#000" strokeWidth="4"/>
        <path d="M 80 50 L 100 30" stroke="#000" strokeWidth="4"/>
        <path d="M 120 50 L 100 30" stroke="#000" strokeWidth="4"/>

        {/* Cartel SQL */}
        <rect x="70" y="150" width="60" height="35" rx="5" fill="#033" stroke="#0ff" strokeWidth="3"/>
        <text x="100" y="175" fontSize="18" textAnchor="middle" fill="#0ff" fontFamily="monospace">
          SQL
        </text>
      </svg>
    </div>
  );
};

export default TigreSQL;
