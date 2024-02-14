import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "../pages/home";
import { footerData } from "@pages/home/footer/mock";
import Search from "@pages/search";
import Noti from "@pages/noti";
import Detail from "@pages/detail";
const MainRouter = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        ...footerData.map((item) => ({
          path: item.path,
          element: cvElm(item.element),
        })),
      ],
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/noti",
      element: <Noti />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router} />;
};

const cvElm = (Item) => <Item />;

export default MainRouter;
