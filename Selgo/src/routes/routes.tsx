import { Home, Target, Property, Notification } from "./lazyComponents";
import AppLayout from "../Layout/AppLayout/AppLayout";
import appPaths from "../utils/routesPath";
import NotFound from "../components/NotFound";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    //all app pages render inside the children
    children: [
      {
        path: appPaths.HOME,
        element: <Home />,
      },
      {
        path: appPaths.TARGET,
        element: <Target />,
      },
      {
        path: appPaths.PROPERTY,
        element: <Property />,
      },
      {
        path: appPaths.NOTIFICATION,
        element: <Notification />,
        sub_children: [
          {
            path: appPaths.SAVEDSEARCH,
            element: <div>this is saved search</div>,
          },
          {
            path: appPaths.CHECKOUT,
            element: <div>this is checkout</div>,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
