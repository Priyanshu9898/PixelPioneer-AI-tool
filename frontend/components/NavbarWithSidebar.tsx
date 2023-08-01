"use client";

import { useAuth } from "@/Context/AuthContext";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SubMenuOpenState } from "@/types/Home";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Sidebar from "./Sidebar";
import SidebarItems from "./SidebarItems";
import ProfileDropdown from "./ProfileDropdown";

const NavbarWithSidebar = () => {
  const router = useRouter();
  const { setTheme } = useTheme();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [userName, setUserName] = useState<null | string>(null);

  

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              {/* Sidebar */}
              <Sidebar />

              {/* Logo */}
              <Link href="/" className="flex ml-2 md:mr-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  PixelPioneer
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="bg-transparent dark:hidden hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 outline-none"
                onClick={() => setTheme("dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 " />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden dark:flex bg-transparent hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 outline-none"
                onClick={() => setTheme("light")}
              >
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <div className="flex items-center ml-3">
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SidebarItems />
    </>
  );
};

export default NavbarWithSidebar;
