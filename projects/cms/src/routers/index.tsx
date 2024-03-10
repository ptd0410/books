import {
  FaProductHunt,
  FaChartBar,
  FaHistory,
  FaLayerGroup,
} from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { Cate, Hist, Prod, Statistics, User } from "@containers";

export const homeRouter = [
  {
    text: "Products",
    icon: FaProductHunt,
    path: "/prod",
    element: <Prod />,
  },
  {
    text: "Categories",
    icon: BiSolidCategory,
    path: "/cate",
    element: <Cate />,
  },
  {
    text: "Histories",
    icon: FaHistory,
    path: "/history",
    element: <Hist />,
  },
  {
    text: "Statistics",
    icon: FaChartBar,
    path: "/statistics",
    element: <Statistics />,
  },
  {
    text: "Users",
    icon: FaLayerGroup,
    path: "/user",
    element: <User />,
  },
];
