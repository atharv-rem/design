import {
  type RouteConfig,
  route,
  index,
  layout
} from "@react-router/dev/routes";


export default [
  layout("layout.jsx", [
    index("routes/index.jsx"),
    route("/tool/:tools", "routes/tool.$tools.jsx"),
    layout("routes/colours/layout.jsx", [
      index("routes/colours/index.jsx"),
      route("colours/:pricing", "routes/colours/$pricing.jsx"),
    ]),
    layout("routes/mockups/layout.jsx",[
      index("routes/mockups/index.jsx"),
      route("mockups/:pricing", "routes/mockups/$pricing.jsx"),
    ]),
    layout("routes/illustrations/layout.jsx",[
      index("routes/illustrations/index.jsx"),
      route("illustrations/:pricing", "routes/illustrations/$pricing.jsx"),
    ]),
    layout("routes/design-inspo/layout.jsx", [
      index("routes/design-inspo/index.jsx"),
      route("design-inspo/:pricing", "routes/design-inspo/$pricing.jsx"),
    ]),
    layout("routes/fonts/layout.jsx", [
      index("routes/fonts/index.jsx"),
      route("fonts/:pricing", "routes/fonts/$pricing.jsx"),
    ]),
    layout("routes/icons/layout.jsx", [
      index("routes/icons/index.jsx"),
      route("icons/:pricing", "routes/icons/$pricing.jsx"),
    ]),
  ]),
] satisfies RouteConfig;
