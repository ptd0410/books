import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.scss";
import Home from "@pages/home";
import { homeRouter } from "@routers";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
      children: homeRouter,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
