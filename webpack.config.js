const path = require("path");

module.exports = {
  watch: true,
  entry: "./dist/client/private/index.js",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist", "client", "public", "js"),
  },
  mode: "production",
  stats: "errors-warnings"
};
