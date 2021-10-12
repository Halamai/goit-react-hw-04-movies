import { lazy } from "react";

export const moviesRoutes = [
  {
    name: "Cast",
    path: "/cast",
    component: lazy(() =>
      import("../cast/Cast" /* webpackChunkName: "Cast" */)
    ),
    exact: true,
  },

  {
    name: "Reviews",
    path: "/reviews",
    component: lazy(() =>
      import("../reviews/Reviews" /* webpackChunkName: "Reviews" */)
    ),
    exact: true,
  },
];
