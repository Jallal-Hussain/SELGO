import { Home, Target, Property } from "./lazyComponents";
import AppLayout from "../Layout/AppLayout/AppLayout"; 
import appPaths from "../utils/routesPath";
import NotFound from '../components/NotFound';

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
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
