import React from "react";

interface ResumePDFCardProps {
  title: string;
  org?: string;
}

export const ResumePDFCard: React.FC<ResumePDFCardProps> = ({ title, org }) => {
  return (
    <div
      className="w-full max-w-xs flex flex-col p-4 rounded-lg shadow-md cursor-pointer bg-white border border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className="flex items-center mb-3">
        <span style={{ fontSize: "28px", marginRight: "10px" }}>📄</span>
        <h1 style={{ fontSize: "16px", fontWeight: 600, color: "#111" }}>{title}</h1>
      </div>
      {org && <p style={{ fontSize: "12px", color: "#555" }}>{org}</p>}
    </div>
  );
};
