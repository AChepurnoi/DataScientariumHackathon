let express = require('express');  
let request = require('request');

let app = express();  


let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')
let webpackHotMiddleware = require('webpack-hot-middleware')
let config = require('./webpack.config')
config.devtool = '#eval-source-map'

let compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));

let proxy = require('express-http-proxy');

app.use(express.static('output'));
app.use(express.static('src/assets'));

app.use('/api', proxy("api/",{
	limit: '10mb'
}));

app.get("/*", function(req, res) {
    res.sendFile(__dirname + '/output/index.html')
});

app.timeout = 120000 * 5;
app.listen(process.env.PORT || 3000);  