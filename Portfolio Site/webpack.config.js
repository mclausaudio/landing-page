var path = require("path");

module.exports = {
    entry: "./scripts/app.js",
    output: {
        path: path.resolve(__dirname, "./scripts/temp"),
        filename: "bundle.js"
    }
}