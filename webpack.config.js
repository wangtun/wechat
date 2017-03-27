/**
 * Created by wangtun on 2017/3/27.
 */
var webpack=require('webpack');
module.exports={
    devtool:'#eval-source-map',
    //入口文件，多个的话将按顺序执行
    entry:[
        'babel-polyfill','./App/js/index.jsx'
    ],
    output:{
        path:'App',             //打包后文件的存放路径
        publicPath:'/App/',     //服务器根路径
        filename:'bundle.js'    //打包后的文件名
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
            {test:/\.js?$/,loader:'babel',exclude: /node_modules/},
            {
                test:/\.jsx?$/,
                loader:'babel',
                exclude: /node_modules/,
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    watch: true, //观察模式，每次修改保存webpack.config.js中引用文件，bundle.js的文件会自动更新
    //指定可以被 require 的文件后缀,比如 Hello.js 这样的文件就可以直接用 require(./Hello) 引用
    resolve:{
        root:'',
        extensions:['','.js','.jsx','.json','.less','.css']  ////定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
    }
}