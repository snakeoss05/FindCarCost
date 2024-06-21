import React from "react";
import SidebarMenu from "../components/SidebarMenu";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row ">
      <SidebarMenu />
      <div className="w-full h-[calc(100vh-80px)] pb-12 lg:pb-0 lg:h-full lg:w-[calc(100vw-214px)]">
        {children}
      </div>
    </div>
  );
}
