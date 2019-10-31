const Router = require('koa-router')
const dblink = require('../../libs/database')


let router = new Router()

router.post('login', async ctx=>{
    // console.log(ctx.request.fields)
    // let {q} = ctx.request.fields
    
    let query = ()=>{
        return new Promise((resolve,reject)=>{
            dblink.query("SELECT * FROM luanjingqi.user",async (err,data)=>{
                let userJson =[]
                for (let i = 0; i < data.length; i++) {
                    userJson.push(data[i])
                    console.log(data[i])
                }
                
                resolve({msg:'查询成功',data:userJson})
            })
        })
        
    }
    let result = await query()
    ctx.body = result
})
router.get('login', async ctx=>{
    // console.log(ctx.request.fields)
    // let {q} = ctx.request.fields
    
    let query = ()=>{
        return new Promise((resolve,reject)=>{
            dblink.query("SELECT * FROM luanjingqi.user",async (err,data)=>{
                let userJson =[]
                for (let i = 0; i < data.length; i++) {
                    userJson.push(data[i])
                    console.log(data[i])
                }
                
                resolve({msg:'OK',data:userJson})
            })
        })
        
    }
    let result = await query()
    ctx.body = result
})

module.exports = router.routes()