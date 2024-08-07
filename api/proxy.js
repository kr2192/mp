const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  // Extract the path from the original request URL
  const path = req.url;

  // Define the target domain
  const target = "https://discord.com";

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // Remove the leading "/" from the path
      "^/": path,
    },
    router: function (req) {
      // Dynamically rewrite the URL
      return target + path;
    },
  })(req, res);
};
