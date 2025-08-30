import { type RouteConfig, layout } from "@react-router/dev/routes";

export default [
  layout("routes/layout.jsx", [
    { index: true, file: "routes/index.jsx" },   
  ]),
] satisfies RouteConfig;
