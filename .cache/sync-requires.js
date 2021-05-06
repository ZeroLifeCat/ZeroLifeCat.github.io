const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Documents\\Programming\\CSSA_Official_Website\\cssa_web\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Documents\\Programming\\CSSA_Official_Website\\cssa_web\\src\\pages\\404.js"))),
  "component---src-pages-event-page-tsx": hot(preferDefault(require("D:\\Documents\\Programming\\CSSA_Official_Website\\cssa_web\\src\\pages\\Event-Page.tsx"))),
  "component---src-pages-family-page-tsx": hot(preferDefault(require("D:\\Documents\\Programming\\CSSA_Official_Website\\cssa_web\\src\\pages\\Family-Page.tsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Documents\\Programming\\CSSA_Official_Website\\cssa_web\\src\\pages\\index.js"))),
  "component---src-pages-membership-page-tsx": hot(preferDefault(require("D:\\Documents\\Programming\\CSSA_Official_Website\\cssa_web\\src\\pages\\Membership-Page.tsx"))),
  "component---src-pages-sponsor-page-tsx": hot(preferDefault(require("D:\\Documents\\Programming\\CSSA_Official_Website\\cssa_web\\src\\pages\\Sponsor-Page.tsx")))
}

