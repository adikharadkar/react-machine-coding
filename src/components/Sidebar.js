import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

import { data } from "./SidebarData";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, onSidebar }) => {
  return (
    <>
      <div className={isOpen ? "Sidebar active" : "Sidebar"}>
        <ul>
          <li>
            <IoIcons.IoMdClose onClick={() => onSidebar(false)} />
          </li>
          {data.map((icon, index) => {
            return (
              <li key={index}>
                <Link to="icon.path" className="link">
                  {icon.icon} {icon.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
