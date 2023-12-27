import React from "react";
import LogoIcon from "./Icons/LogoIcon";

export default function SidebarTitle() {
  return (
    <div className="sticky top-0 z-10 bg-primary-dark border-b-2 border-b-secondary-dark text-center p-2 md:text-xl lg:text-2xl flex justify-center">
      <span className="md:hidden">
        <LogoIcon />
      </span>
      <span className="hidden md:block">MyChatNBX</span>
    </div>
  );
}
