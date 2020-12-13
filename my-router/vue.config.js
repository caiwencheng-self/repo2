const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false, // 这句话的意思就是我们不会再保存的时候检查它的语法规范；
  devServer:{
    port:8080,   //设置项目端口号
    	host:"0.0.0.0", //允许所有的主机访问当前项目
        proxy:{       // proxy就是代理的意思;
            '/api':{  //正则匹配到以这个开头的时候 就用代理
                target:"http://chst.vip:1902", //指向的是目标服务器
                pathRewrite:{   // 这里指的就是路径重写;
                    '^/api':""  // 这里把/api替换成目标网址之后，就把/api替换成空的字符串;
                }
            }
        }
  },
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('$', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('layout',resolve('src/layout'))
        .set('base',resolve('src/base'))
        .set('static',resolve('src/static'))
}
};

// 配置完成代理配置跨域后，我们一定要把项目进行重新启动;
