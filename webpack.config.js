const path = require("path");
module.exports = {
  watch: true,
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
