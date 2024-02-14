import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineDatabase,
  AiFillDatabase,
} from "react-icons/ai";
import {
  IoCart,
  IoCartOutline,
  IoStorefront,
  IoStorefrontOutline,
} from "react-icons/io5";
import { FaRegUser, FaUserAlt } from "react-icons/fa";

import CategoryContainer from "../container/CategoryContainer";
import HomeContainer from "../container/HomeContainer";
import CartContainer from "../container/CartContainer";
import StoreContainer from "../container/StoreContainer";
import ProfileContainer from "../container/ProfileContainer";

export const footerData = [
  {
    text: "home",
    icon: AiOutlineHome,
    selectedIcon: AiFillHome,
    path: "/",
    element: HomeContainer,
  },
  {
    text: "category",
    icon: AiOutlineDatabase,
    selectedIcon: AiFillDatabase,
    path: "/category",
    element: CategoryContainer,
  },
  {
    text: "cart",
    icon: IoCartOutline,
    selectedIcon: IoCart,
    path: "/cart",
    element: CartContainer,
  },
  {
    text: "store",
    icon: IoStorefrontOutline,
    selectedIcon: IoStorefront,
    path: "/store",
    element: StoreContainer,
  },
  {
    text: "profile",
    icon: FaRegUser,
    selectedIcon: FaUserAlt,
    path: "/profile",
    element: ProfileContainer,
  },
];
