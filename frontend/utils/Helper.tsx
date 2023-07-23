"use client";

import NavbarWithSidebar from "@/components/NavbarWithSidebar";
import { usePathname } from "next/navigation";
import React from "react";

const Helper = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isRegisterPage = pathname === "/register"

  return <>{(isLoginPage || isRegisterPage) ? null : <NavbarWithSidebar />}</>;
};

export default Helper;
