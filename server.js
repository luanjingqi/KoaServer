const Koa = require('koa');
const Router = require('koa-router');
const static = require('./routers/static')
const ejs = require('koa-ejs');
const path = require('path');
const body = require('koa-better-body')
const session = require('koa-session')
const fs = require('fs')

let server = new Koa();

server.listen(8080);
console.log('server is run in port:8080')

server.use(body({
    uploadDir: path.resolve(__dirname,'./static/upload')
}));

server.keys = fs.readFileSync('./tool/keys-tool.js').toString().split('\n')

server.use(session({
    maxAge: 20*86400*1000
}))

let router = new Router();

router.use('/', require('./routers/www'));
router.use('/admin', require('./routers/admin'));
router.use('/api', require('./routers/api'));

static(router);

server.use(router.routes())