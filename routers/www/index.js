const Router = require('koa-router')
const dblink = require('../../libs/database')


let router = new Router()

router.get('news', async ctx=>{
    ctx.body = dblink.query('SELECT * FROM luanjingqi.users')
})

module.exports = router.routes()