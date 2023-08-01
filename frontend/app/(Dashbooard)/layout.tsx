import React, { FC, ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 sm:ml-64 dark:bg-gray-900 h-screen dark:text-white">
      <div className="p-4 rounded-lg mt-14 dark:bg-gray-900">{children}</div>
    </div>
  );
};

export default layout;
