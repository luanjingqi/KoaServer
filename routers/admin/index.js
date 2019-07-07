const Router = require('koa-router')
const dblink = require('../../libs/database')

let router = new Router()

router
    .get('/login', async ctx => {
        await ctx.render('admin/login',{})
    })
    .post('/login', async ctx=>{
        // let {user , password} = ctx.request.fields;
        ctx.body = '登录成功！'
        console.log(dblin.query('SELECT * FROM luanjingqi'));
    })

module.exports = router.routes()