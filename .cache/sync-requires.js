const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Documents\\Programming\\ZeroLifeCat.github.io\\src\\pages\\404.js"))),
  "component---src-pages-event-page-tsx": hot(preferDefault(require("D:\\Documents\\Programming\\ZeroLifeCat.github.io\\src\\pages\\Event-Page.tsx"))),
  "component---src-pages-family-page-tsx": hot(preferDefault(require("D:\\Documents\\Programming\\ZeroLifeCat.github.io\\src\\pages\\Family-Page.tsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Documents\\Programming\\ZeroLifeCat.github.io\\src\\pages\\index.js"))),
  "component---src-pages-membership-page-tsx": hot(preferDefault(require("D:\\Documents\\Programming\\ZeroLifeCat.github.io\\src\\pages\\Membership-Page.tsx"))),
  "component---src-pages-sponsor-page-tsx": hot(preferDefault(require("D:\\Documents\\Programming\\ZeroLifeCat.github.io\\src\\pages\\Sponsor-Page.tsx")))
}

