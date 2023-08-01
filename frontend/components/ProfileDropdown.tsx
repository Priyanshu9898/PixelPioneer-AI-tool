import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useAuth } from "@/Context/AuthContext";

const ProfileDropdown: FC = () => {
  const { logout } = useAuth();

  const handleLogout: () => void = () => {
    logout();
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://ui-avatars.com/api/?name=priyanshu+malaviya" />
            {/* <AvatarFallback className="bg-sideBar text-gray-50 dark:text-gray-50 dark:bg-blue-600 bg-blue-900">
              PM
            </AvatarFallback> */}
          </Avatar>
          {/* <UserAvatar image="" /> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-gray-700">
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer hover:text-red-500"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileDropdown;
