var webpack = require("webpack");
var mainConfig = require("../config/main");
var webpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../config/webpack.dev");

function run() {
    var compiler = webpack(webpackConfig);
    return new webpackDevServer(compiler, {
        // contentBase: "http://localhost/",
        // publicPath: "",
        // contentBase: 'http://localhost:3000/',
    publicPath: 'http://localhost:3000/'
    }).listen(mainConfig.devPort)
}

run();