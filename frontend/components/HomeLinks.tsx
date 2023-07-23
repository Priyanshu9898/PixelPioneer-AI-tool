import { LinkProp } from "@/types/Home";
import Link from "next/link";
import React from "react";

const HomeLinks: React.FC<LinkProp> = ({ link, title, icon }) => {
  return (
    <Link
      href={link}
      className="shadow-md mt-3 mb-2 cursor-pointer inline-flex items-center justify-between w-full md:w-[60%] p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:shadow-gray-950 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <div className="flex gap-x-4">
        {icon}
        <span className="w-full">{title}</span>
      </div>
      <div>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </div>
    </Link>
  );
};

export default HomeLinks;
