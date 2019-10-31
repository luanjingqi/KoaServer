const Router = require('koa-router')
const dblink = require('../../libs/database')

let router = new Router()

router
    .get('/login', async ctx => {
        await ctx.render('admin/login.ejs')
    })
    .post('/login', async ctx=>{
        let {user , password} = ctx.request.fields;
        await ctx.render (dblink.query('SELECT * FROM luanmanager.users'))
    })

module.exports = router.routes()