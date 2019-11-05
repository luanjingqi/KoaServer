const Router = require('koa-router')
const sql = require('../../libs/db/dbcontrol')
const url = require('url');


let router = new Router()

router.get('login', async ctx=>{
    let {password,username} = url.parse(ctx.url, true).query;

    let result = await sql.selectsql('*','luanjingqi.user')
    
    for(let item of result.data){
        if (item.user_name == username && item.password == password) {
            ctx.body = {code:1,msg:"登录成功！"}
            return
        } else if (item.user_name == username && item.password != password) {
            ctx.body = {code:0,msg:"密码错误！"}
            return
        } else {
            ctx.body = {code:2,msg:"用户名不存在！"}
        }
    }
    
})
router.get('register', async ctx=>{
    
    let val = {password,username,nickname,email,phone,time} = url.parse(ctx.url, true).query;

    let result = await sql.insertsql(val,'luanjingqi.user')
    
    if (result.data.fieldCount == 0) {
        ctx.body = {code:1,msg:'注册成功！'}
    } else {
        ctx.body = {code:0,msg:'注册失败'}
    }
})

module.exports = router.routes()