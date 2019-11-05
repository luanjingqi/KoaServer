const Router = require('koa-router')
const sql = require('../../libs/db/dbcontrol')


let router = new Router()

router.get('login', async ctx=>{
    console.log("请求",ctx.request.header)
    let {password,username} = ctx.request.header

    let result = await sql.selectsql('*','luanjingqi.user')
    console.log("sql",result);
    ctx.body = {code:0,msg:"用户名不存在！"}
    
    for(let item of result.data){
        console.log("单个数据",item.user_name);
        console.log(username);
        
        
        if (item.user_name == username && item.password == password) {
            ctx.body = {code:1,msg:"登录成功！"}
            return
        } else if (item.user_name == username && item.password != password) {
            ctx.body = {code:0,msg:"密码错误！"}
            return
        } else {
            ctx.body = {code:0,msg:"用户名不存在！"}
        }
    }
    
})

module.exports = router.routes()