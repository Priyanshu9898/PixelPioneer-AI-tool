import Heading from "@/components/Heading";
import { CodeGenerator } from "@/constants/HomeLinksIcons";
import React, { FC } from "react";
import {LuCodesandbox} from "react-icons/lu";

const CodeGeneration: FC = () => {
  return (
    <>
      <Heading
        icon={<CodeGenerator width={10} height={10} />}
        title="Code Generator"
        description="Upload Your prompt to generate in depth code for your task."
      />
      <div className="mt-6 shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-900 rounded-md">
        <form>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LuCodesandbox />
              
            </div>
            <input
              type="search"
              id="search"
              className="outline-none focus:outline-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 dark:focus:border-gray-800"
              placeholder="Enter Your Prompt..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CodeGeneration;
