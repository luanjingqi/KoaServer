const Koa = require('koa');
const Router = require('koa-router');
const static = require('./routers/static')
const ejs = require('koa-ejs');
const path = require('path');
const body = require('koa-better-body')
const session = require('koa-session')
const fs = require('fs')

let server = new Koa();
//服务器监听端口
server.listen(8080);

console.log('server is run in port:8080')
//配置上传文件路径
server.use(body({
    uploadDir: path.resolve(__dirname,'./static/upload')
}));
//使用keys验证session
server.keys = fs.readFileSync('./tool/keys-tool.js').toString().split('\n')

server.use(session({
    maxAge: 20*86400*1000,
    renew: true
}, server))
//路由
let router = new Router();

//数据库
server.context.db = require('./libs/database')

//ejs模板引擎加入
ejs(server,{
    root: path.resolve(__dirname,'template'),
    layout: false,
    viewExt: 'ejs',
    cache:false,
    debug: false
});

//统一处理错误
// router.use(async (ctx, next)=>{
//     try {
//         await next();
//     } catch (error) {
//         // ctx.state = 500,
//         // ctx.body = '服务错误！';
//         ctx.throw(500,'这个那个的')
//     }
// })

router.use('/', require('./routers/www'));
router.use('/admin', require('./routers/admin'));
router.use('/api', require('./routers/api'));

static(router);

server.use(router.routes())