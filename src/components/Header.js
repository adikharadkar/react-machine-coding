import React, { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <>
      <Navbar onSidebar={handleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onSidebar={handleSidebar} />
    </>
  );
};

export default Header;
