export const ROUTES = {
  home: "/",
  catalog: "/catalog",
  contact: "/contact",
} as const;

export type RoutePageType = keyof typeof ROUTES;
