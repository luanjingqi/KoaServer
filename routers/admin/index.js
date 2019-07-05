const Router = require('koa-router')

let router = new Router()

router.get('/login', async ctx => {
   await ctx.render('admin/login',{})
}).post('/login', async ctx=>{
    // let {user , password} = ctx.request.fields;
    ctx.body = '登录成功！'
})
module.exports = router.routes()