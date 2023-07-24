import { DarkThemeToggle } from "flowbite-react";
import React from "react";

const ToggleTheme = () => {
  return (
    <>
      <nav className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div></div>
          <div>
            <DarkThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
};

export default ToggleTheme;
