import React from "react";

import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FcIcons.FcAbout />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <GrIcons.GrProjects />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
];
