// ./components/IndependentCard.tsx
import React, { ReactNode } from 'react';

type IndBoxProps = {
  title: string;
  org: ReactNode; // <-- This is the important fix
  color: string;
  borderColor: string;
};

export const IndBox = ({ title, org, color, borderColor }: IndBoxProps) => {
  return (
    <div
      className="rounded-lg shadow-md p-4 h-full"
      style={{
        backgroundColor: color,
        border: `2px solid ${borderColor}`,
      }}
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="text-sm text-gray-800">{org}</div>
    </div>
  );
};