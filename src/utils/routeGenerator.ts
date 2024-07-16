import { GeneratedRoute, RouteItem } from "../types";


export const routeGenerator = (items: RouteItem[]): GeneratedRoute[] => {
  // Admin Route
  const adminRoutes = items.reduce<GeneratedRoute[]>((acc, item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        if (child.path) {
          acc.push({
            path: child.path,
            element: child.element,
          });
        }
      });
    }

    return acc;
  }, []);

  return adminRoutes;
};
