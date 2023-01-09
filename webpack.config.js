//引入path包
const path = require('path')
const HtmlWP = require('html-webpack-plugin');
//所有配置信息都要写在这里
module.exports = {
    //1.指定入口文件
    entry: "./src/index.ts",
    //2.指定打包文件的目录
    output: {
        //输出路径
        path: path.resolve(__dirname, 'dist'),
        //输出文件名
        filename: 'bundle.js',
        environment:{
            //为兼容更低版本的浏览器，这里配置为把箭头函数转换为普通函数
            arrowFunction:false,
            const:false
        }
    },
    //指定打包时要使用的模块
    module: {
        //指定加载规则
        rules: [
            {
                //test标识规则生效的文件类型
                test: /.\.ts$/,
                //加载要使用的loader
                use: [
                    //配置babel loader
                    {
                        loader: "babel-loader",
                        //配置选项
                        options: {
                            //预设信息
                            presets: [
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //兼容目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": '11'
                                        },
                                        //指定corejs版本
                                        "corejs": "3",
                                        //指定使用corejs的方式,usage表示按需引入
                                        "useBuiltIns": 'usage'
                                    }
                                ],
                            ]
                        }
                    },
                    //配置ts loader
                    'ts-loader',
                
                ],
                //排除的文件
                exclude: /node_modules/
            },
             //设置less文件的处理
            {
                test:/.\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                            "postcss-preset-env",
                                            {
                                                browser:'last 2 versions'
                                            }
                                    ]
                                    
                                ]
                        }
                        }
                    }
                    ,
                    "less-loader"
                ]
            }
        ]
    },
    //配置webpack的插件
    plugins: [
        //使用该插件自动生成html并引入打包后的js
        new HtmlWP(
            {template:'./src/index.html',}
        )
    ],
    mode: "development",
    devServer:{
        host: 'localhost',
        port: 9000,
        static: './dist'
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src')
        },
        extensions:['.mjs','.js','.ts']
    }

}

