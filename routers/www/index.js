const Router = require('koa-router')
const dblink = require('../../libs/db/database')
const se = require('../../libs/db/dbcontrol')


let router = new Router()

router.post('login', async ctx=>{
    // console.log(ctx.request.fields)
    // let {q} = ctx.request.fields
    let result = await se.selectsql('*','luanjingqi.user')
    ctx.body = result
})
router.get('login', async ctx=>{
    // console.log(ctx.request.fields)
    // let {q} = ctx.request.fields
    
    let result = await se.selectsql('*','luanjingqi.user')
    ctx.body = result
})

module.exports = router.routes()