var path = require('path');

module.exports = {
	entry: [
    	'webpack/hot/dev-server',
    	path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module:{
    	loaders:[{
	      	test: /\.js?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
	      	loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
	      	query: {
			    presets: ['react','es2015']
      		}
	    }, {
          test: /\.css$/, // Only .css files
          loader: 'style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]' // css loaders
        }]
    }
}