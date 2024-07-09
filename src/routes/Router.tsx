import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import { fronendPaths } from "./frontend.route";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: routeGenerator(fronendPaths) },
]);

export default router;
