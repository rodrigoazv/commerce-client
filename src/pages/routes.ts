import React from "react";
import Main from "./Main/main";

interface RouteDataItem {
  path?: string;
  name?: string;
  isProtected?: boolean;
  component?: React.FC;
}

export const routes: RouteDataItem[] = [
  {
    path: "/main",
    name: "home",
    isProtected: false,
    component: Main,
  },
];
