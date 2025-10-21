import React from "react";
import type { SidebarProps } from "../data";

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
  <aside role="complementary" className="w-full py-4 bg-[#ebce8c]/70  backdrop-blur-md shadow-[0_4px_18px_rgba(203,169,92,0.25)] hover:shadow-[0_6px_25px_rgba(203,169,92,0.35)] transition-shadow duration-300">
   <div className="space-y-4 text-gray-800">{children}</div>
  </aside>

  );
};

export default Sidebar;
