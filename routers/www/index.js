const Router = require('koa-router')

let router = new Router()

router.get('news', async ctx=>{
    ctx.body='bbb'
})

module.exports = router.routes()