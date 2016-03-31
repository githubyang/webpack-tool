var webpack=require('webpack');
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
	// 如果样式文件单独打包需要指定打包目录
  entry:{// 打包文件
    //'webpack/hot/only-dev-server',
		app:['webpack/hot/only-dev-server'],// 热替换
		"/js/bundle":'./js/app.js'// 入口文件 键值作为编译后文件的目录和名字
	},
  output:{// 编译路径和文件名
    path:'./assets/',
		publicPath:'./assets',
    filename:'[name].js'
  },
  module:{
    loaders:[
      {test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'},
      {test:/\.css$/,loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")},
      //{test:/\.less/,loader:'style-loader!css-loader!less-loader'},// 导出单个
			{test:/\.less/,loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")},// 导出多个
			//{test: /\.scss$/, loader:'style-loader!css-loader!sassLoader'},
			{test:/\.scss/,loader:ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")},
			{
				test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
				loaders:[
					'url?limit=10000&name=img/[hash:8].[name].[ext]',
					'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
				]
			},
			{
				test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
				loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
			},
			//{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?presets[]=react,presets[]=es2015'},
      {
				test:/\.js$/,
				exclude:/node_modules/,
        loader:"babel-loader",
        query:{
					presets:['react','es2015']// 支持es6写法
        }
      }
    ]
  },
  resolve:{// 自动补全
    extensions:['','.js','.json','.coffee','.jsx']
  },
  devServer:{
    hot:true,// 热替换
		contentBase:'./src/',// 访问目录
		proxy:{// 设置代理
			//'*':'http://localhost:3000'
		},
		port:9000,// 端口
    inline:true
  },
  plugins:[
      new webpack.NoErrorsPlugin(),
			new ExtractTextPlugin("[name].css"),
      new webpack.HotModuleReplacementPlugin(),
			//new CommonsChunkPlugin("common.js", []),// 是否提取公共组件
			new HtmlWebpackPlugin(
				{// 编译html模板
					files:{// 文件映射
						css:["bundle.css"],
						js:["bundle.js"]
					},
					template:'./src/tmpl/index.html',
					//favicon:'./src/img/favicon.ico',// favicon路径
					filename:'a.html',
					inject:true,
					minify:{// 压缩HTML文件
						removeComments:true,// 移除HTML中的注释
						collapseWhitespace:false// 删除空白符与换行符
					},
					chunks:['bundle']
			})
    ]
};
