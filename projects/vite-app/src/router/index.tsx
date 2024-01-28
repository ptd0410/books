import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "../pages/home";
const MainRouter = () => {
  const router = createHashRouter([{ path: "/", element: <Home /> }]);

  return <RouterProvider router={router} />;
};

export default MainRouter;
