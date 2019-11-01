const Koa = require('koa');
const Router = require('koa-router');
const static = require('./routers/static')
const path = require('path');
const body = require('koa-better-body')
const session = require('koa-session')
const fs = require('fs')

let server = new Koa();
//服务器监听端口
server.listen(8088);

console.log('服务启动------------------端口：8088----------------------！')
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
server.context.db = require('./libs/db/database')

//统一处理错误
router.use(async (ctx, next)=>{
    try {
        await next();
    } catch (error) {
        await ctx.throw(500,'服务出错啦！不用看了，找不到错在哪，滚回去看代码去！')
        console.log(error);
    }
})

router.use('/', require('./routers/www'));

static(router);

server.use(router.routes())